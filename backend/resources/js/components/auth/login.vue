<template>
  <div>
    <v-app id="inspire">
        <v-content>
          <v-container fluid fill-height>
              <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card class="elevation-12">
                      <v-toolbar dark color="primary">
                          <v-toolbar-title>Sistema Almacén</v-toolbar-title>
                      </v-toolbar>
                      <v-card-text>
                          <v-form>
                            <v-text-field
                                prepend-icon="person"
                                v-model="form.name"
                                name="login"
                                label="usuario"
                                type="text"
                            ></v-text-field>
                            <v-text-field
                                id="password"
                                prepend-icon="lock"
                                v-model="form.pwd"
                                name="password"
                                label="Contraseña"
                                type="password"
                            ></v-text-field>
                          </v-form>
                      </v-card-text>
                      <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="primary" @click="submit">Entrar</v-btn>
                      </v-card-actions>
                    </v-card>
                </v-flex>
              </v-layout>
          </v-container>
        </v-content>
    </v-app>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        api_url:{
          post: {
            login:"api/auth/login"
          }
        },
        valid: true,
        form: {
          name: "jjolon@mineco.gob.gt",
          pwd: "12345678"
        }
      }
    },
    methods: {
      submit(){
        axios.post(this.api_url.post.login,{
          email: this.form.name,
          password: this.form.pwd
        })
        .then(response => {
          console.log(response)
          this.$router.push("/profile");
        })
        .catch(error => {
          console.log(error)
        })
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>