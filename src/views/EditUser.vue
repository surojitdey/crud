<template>
  <div class="edit-user d-flex align-center justify-center my-5">
    <v-card class="pa-6" width="500">
      <v-card-title class="px-0">Edit User</v-card-title>
      <v-form id="user-form" @submit.prevent="saveUser">
        <v-row no-gutters justify="space-around">
          <v-col cols="12">
            <v-text-field v-model="user.name" @change="updateUserProperty('name', $event)" outlined dense label="Name"></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="user.surname" @change="updateUserProperty('surname', $event)" outlined dense label="Surname"></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="user.email" @change="updateUserProperty('email', $event)" outlined dense label="Email"></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="user.phone_number" @change="updateUserProperty('phone_number', $event)" outlined dense label="Phone Number"></v-text-field>
          </v-col>
        </v-row>
        <v-card-actions class="px-0">
          <v-btn color="primary" width="100" for="user-form" type="submit">Save</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
    <v-dialog v-model="userUpdated" width="500">
      <v-card height="100" class="d-flex align-center">
        <v-card-text class="success--text text-subtitle-1 text-center">User details updated successfully.</v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  data: () => ({
    userUpdated: false
  }),
  computed: {
    ...mapGetters({
      user: 'getUser'
    }),
    user_id() {
      return this.$route.params.user_id
    }
  },
  methods: {
    ...mapActions([
      'fetchUsers',
      'fetchUser',
      'updateUser'
    ]),
    ...mapMutations([
      'setUserProperty'
    ]),
    updateUserProperty(property, value) {
      this.setUserProperty({
        property: property,
        value: value
      })
    },
    saveUser() {
      this.updateUser().then(() => {
        this.fetchUser(this.user_id).then(() => {
          this.userUpdated = true
        })
      })
    }
  },
  mounted() {
    this.fetchUsers()
    this.fetchUser(this.user_id)
  }
}
</script>
