<template>
  <v-container fluid>
    <div class="grey--text ml-2">
      <v-row no-gutters justify="space-between" align="center">
        <v-col cols="2" class="d-flex justify-start">
          <v-toolbar-title class="primary--text">Home</v-toolbar-title>
          <v-toolbar-title class="mx-2">/</v-toolbar-title>
          <v-toolbar-title>Users</v-toolbar-title>
        </v-col>
        <v-col cols="2" class="d-flex justify-end align-center">
          <v-toolbar-title>
            <v-icon color="grey">mdi-chart-timeline-variant</v-icon>
            Dashboard
          </v-toolbar-title>
        </v-col>
      </v-row>
    </div>
    <v-card class="mt-2 px-6 d-flex align-center" width="100%" min-height="83vh" flat rounded="0" elevation="0" color="#ebedef">
      <v-container fluid>
        <v-card height="70vh" rounded="0" flat width="100%" color="white">
          <v-row class="pa-4" no-gutters align="center" justify="space-between">
            <span>Users</span>
            <v-btn color="primary" @click="userCreate=true">Create User</v-btn>
          </v-row>
          <v-divider></v-divider>
          <v-row no-gutters class="pa-4">
            <v-col cols="3" class="pr-2">
              <v-text-field
                label="Text"
                outlined
                dense
                hint="Search by name, surname, email, username, company or phone number"
                persistent-hint
              ></v-text-field>
            </v-col>
            <v-col cols="3" class="pl-2">
              <v-select
                label="Select Status"
                dense
                outlined
              ></v-select>
            </v-col>
          </v-row>
          <v-divider class="mx-4"></v-divider>
          <v-simple-table class="pa-4">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-subtitle-1 font-weight-bold text-center">Name</th>
                  <th class="text-subtitle-1 font-weight-bold text-center">Surname</th>
                  <th class="text-subtitle-1 font-weight-bold text-center">Email</th>
                  <th class="text-subtitle-1 font-weight-bold text-center">Phone Number</th>
                  <th class="text-subtitle-1 font-weight-bold text-center">Activate</th>
                  <th class="text-subtitle-1 font-weight-bold text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(user, index) in users" :key="index">
                  <td class="text-center">{{user.name}}</td>
                  <td class="text-center">{{user.surname}}</td>
                  <td class="text-center">{{user.email}}</td>
                  <td class="text-center">{{user.phone_number}}</td>
                  <td class="text-center">{{user.activate}}</td>
                  <td class="d-flex justify-center align-center">
                    <v-btn small color="grey" class="white--text mr-2" @click="editUser(user.id)">Edit</v-btn>
                    <v-btn class="ml-2" small color="error" @click="confirmDelete(index)">Delete</v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-container>
    </v-card>
    <v-dialog v-model="userCreate" width="400">
      <CreateUser :users="users" @user-created="userCreate=false"></CreateUser>
    </v-dialog>
    <v-dialog v-model="wantToDelete" width="400">
      <v-card>
        <v-card-text>Do you want delete this user?</v-card-text>
        <v-card-actions>
          <v-btn @click="deleteAction(selectedUser)" color="green">yes</v-btn>
          <v-btn @click="wantToDelete=false" color="error">no</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'
  import CreateUser from '@/components/createUser.vue'
  export default {
    name: 'HelloWorld',
    components: {
      CreateUser
    },
    data: () => ({
      userCreate: false,
      wantToDelete: false,
      selectedUser: null
    }),
    computed: {
      ...mapGetters({
        users: 'getUsers'
      })
    },
    methods: {
      ...mapActions([
        'fetchUsers',
        'deleteUser',
        'fetchUser'
      ]),
      deleteAction(index) {
        this.deleteUser(index).then(() => {
          this.wantToDelete = false
        })
      },
      confirmDelete(index) {
        this.selectedUser = index
        this.wantToDelete = true
      },
      editUser(id) {
        this.$router.push(`/edit-user/${id}`)
      }
    },
    mounted() {
      this.fetchUsers()
    }
  }
</script>
