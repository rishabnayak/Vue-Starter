<template>
  <div class="container">
            <h4 class="mb-3">Project {{name}}</h4>
            <form v-if="user">
              <div class="mb-3">
                <label for="intro">Short Introduction</label>
                <textarea class="form-control" rows="5" id="intro" v-model="intro"></textarea>
              </div>
              <h6 class="mb-3">Members</h6>
                <p v-for="member in members" :key="member.id">
                    <span class="members">{{ member.member }}</span>
                </p>
                <div class="row">
                  <div class="col-md-4 mb-3">
                    <a class="btn btn-primary" @click="showMember = !showMember && checkMember()">Add Member</a>
                  </div>
                </div>
              <div v-if="showMember" class="row">
                <div class="col-md-auto mb-3">
                  <label for="member">Member Username</label>
                  <div class="input-group">
                    <input type="text" class="form-control" id="member" v-model="member" @input="checkMember()">
                    <div class="availability">
                      <i v-if="memberempty" class="material-icons red">close</i>
                      <i v-else-if="memberregd" class="material-icons red">close</i>
                      <i v-else-if="memberexists" class="material-icons green">check</i>
                      <i v-else-if="membernonexistent" class="material-icons red">close</i>
                    </div>
                  </div>
                    <p v-if="memberempty" class="red availability">Enter a Username</p>
                    <p v-else-if="memberregd" class="red availability">Member already registered!</p>
                    <p v-else-if="memberexists" class="green availability">Member found!</p>
                    <p v-else-if="membernonexistent" class="red availability">Member not found!</p>
                </div>
              </div>
              <hr class="mb-4">
            </form>
            <button :disabled="membernonexistent||memberempty||memberregd" class="btn btn-primary btn-lg btn-block col-md-3" type="submit" @click="updateProject()">Update</button>
          </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init.js'
export default {
  name: 'editproject',
  computed:{
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    async updateProject () {
      const ref = db.collection('projects').doc(this.id)
      const refGet = await ref.get()
      this.members = refGet.data().members
      this.members.push({
        member: this.member
      })
      await ref.update({
        intro: this.intro,
        members: this.members
      })
      this.member = null
      this.showMember = false
    },
    async checkMember () {
      let membercheck = await db.collection('users').where("uname", "==", this.member).get()
      let projcheck = await db.collection('projects').doc(this.id).get()
      let check = projcheck.data().members.find(item => item.member == this.member)
      if (this.member == null || this.member == "") {
        this.memberempty = true
      } else if (membercheck.empty) {
        this.memberexists = false
        this.memberempty = false
        this.membernonexistent = true
        this.memberregd = false
      }
      else if (check != undefined){
        this.memberexists = false
        this.memberempty = false
        this.membernonexistent = false
        this.memberregd = true
      }
      else {
        this.memberexists = true
        this.memberempty = false
        this.membernonexistent = false
        this.memberregd = false
      }
    }
  },
  data () {
    return {
      name: this.$route.params.name,
      intro: null,
      member: null,
      memberempty: null,
      memberexists: null,
      membernonexistent: null,
      showMember: false,
      members: null,
      id: null,
      memberregd:null
    }
  },
  async created(){
    let projectcheck = await db.collection('projects').where("name", "==", this.name).get()
    this.id = projectcheck.docs[0].id
    this.intro = projectcheck.docs[0].data().intro
    this.members = projectcheck.docs[0].data().members
  }
}
</script>

<style>
.container{
  padding-top: 40px;
  padding-bottom: 40px;
}
.material-icons.green { color: green;
}

.material-icons.red { color: red;
}

.availability{
  padding-top: 6px;
  padding-left: 3px;
}

.members{
  padding-left: 3px;
}

.green{
  color: green;
}

.red{
  color: red;
}

</style>
