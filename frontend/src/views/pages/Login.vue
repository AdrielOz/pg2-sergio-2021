<template>
  <div class="auth-wrapper auth-v1">
    <div class="auth-inner">
      <v-card class="auth-card">
        <!-- logo -->
        <v-card-title class="d-flex align-center justify-center py-7">
          <router-link
            to="/"
            class="d-flex align-center"
          >
            <v-img
              :src="require('@/assets/images/img/logo.png')"
              max-height="250px"
              max-width="250px"
              alt="logo"
              contain
              class="me-3 "
            ></v-img>
          </router-link>
        </v-card-title>

        <!-- title -->
        <v-card-text>
          <p class="text-2xl font-weight-semibold text--primary mb-2">
            Sistema de Almacén
          </p>
          <p class="mb-2">
            Inicie sesión en su cuenta.
          </p>
        </v-card-text>

        <!-- login form -->
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="username"
              outlined
              label="Username"
              :rules="emailRules"
              required
              placeholder="username"
              hide-details
              class="mb-3"
            ></v-text-field>

            <v-text-field
              v-model="password"
              outlined
              :type="isPasswordVisible ? 'text' : 'password'"
              label="Password"
              placeholder="············"
              required
              :rules="passwordRules"
              :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              hide-details
              @click:append="isPasswordVisible = !isPasswordVisible"
            ></v-text-field>
            <v-btn
              block
              color="primary"
              class="mt-6"
              :loading="dialog"
              :disabled="dialog"
              @click="submit"
            >
              Entrar
            </v-btn>
            <v-dialog v-model="dialog" hide-overlay persistent width="300">
              <v-card color="primary" dark>
                <v-card-text>
                  Validando Credenciales
                  <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>  
                </v-card-text>
              </v-card>
            </v-dialog>
          </v-form>
        </v-card-text>

        <!-- create new account  -->
        <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
          <router-link :to="{name:'pages-register'}">
            Crear cuenta
          </router-link>
        </v-card-text>
        <v-alert :value="alert" color="#F44336" dark border="top" :icon="icons.mdiCancel" transition="scale-transition">
          {{ textError }}
        </v-alert>
      </v-card>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mapActions } from 'vuex'
import { mdiEyeOutline, mdiEyeOffOutline, mdiCached,mdiCancel, mdiFormatListText } from '@mdi/js'
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const isPasswordVisible = ref(false)
    const username = ref('')
    const password = ref('')

    return {
      emailRules: [
        v => !!v || 'Usuario es requerido',
      ],
      passwordRules: [
        v => !!v || 'Constraseña es requerida'
      ],
      valid: true,
      dialog: false,
      alert: false,
      textError: '',
      isPasswordVisible,
      username,
      password,
      redirect: undefined,
      loading: false,
      loader: null,
      otherQuery: {},
      api_router: {
        post: {
          login: 'api/auth/login',
        },
      },
      icons: {
        mdiEyeOutline,
        mdiEyeOffOutline,
        mdiCached,
        mdiCancel
      },
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query;
        if (query) {
          this.redirect = query.redirect;
          this.otherQuery = this.getOtherQuery(query);
        }
      },
      immediate: true,
    },
  },
  methods: {
    ...mapActions(['setUser','setUserId']),
    submit() {
      const validate = this.$refs.form.validate()
      // this.loading = true
      this.dialog = true
      this.alert = false
      if (validate) {
        this.$http.post(this.api_router.post.login, { username: this.username, password: this.password })
          .then(response => {
            const token = response.data.access_token
            this.setUser(token)
            this.setUserId(response.data.user)
            // this.loading = false
            this.dialog = false
            this.$router.push({ path: '/dashboard' })
          })
          .catch(error => {
            this.dialog = false
            this.alert = true
            this.textError = error
          })
      } else {
        this.dialog = false
        // this.loading = false
      }
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur];
        }
        return acc;
      }, {});
    },
  },
}
</script>

<style lang="scss">
@import '~@/plugins/vuetify/default-preset/preset/pages/auth.scss';
</style>
