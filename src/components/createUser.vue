<template>
  <div>
    <v-card class="pa-6">
      <v-card-title class="px-0">Create User</v-card-title>
      <v-form id="user-form" @submit.prevent="saveUser">
        <v-row no-gutters justify="space-around">
          <v-col cols="12">
            <v-text-field v-model="user.name" outlined dense label="Name"></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="user.surname" outlined dense label="Surname"></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="user.email" outlined dense label="Email"></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="user.phone_number" outlined dense label="Phone Number"></v-text-field>
          </v-col>
        </v-row>
        <v-card-actions class="px-0">
          <v-btn color="primary" width="100" for="user-form" type="submit">Save</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: [
    'users'
  ],
  data: () => ({
    user: {
      id: null,
      name: '',
      surname: '',
      email: '',
      phone_number: '',
      activate: true
    }
  }),
  methods: {
    ...mapActions([
      'createUser'
    ]),
    saveUser() {
      this.user['id'] = this.users.length + 1
      this.createUser(this.user).then(() => {
        this.$emit('user-created')
      })
    }
  }
}
</script>
