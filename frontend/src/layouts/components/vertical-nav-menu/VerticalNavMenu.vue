<template>
  <v-navigation-drawer
    :value="isDrawerOpen"
    app
    floating
    width="260"
    class="app-navigation-menu"
    :right="$vuetify.rtl"
    @input="val => $emit('update:is-drawer-open', val)"
  >
    <!-- Navigation Header -->
    <div class="vertical-nav-header d-flex items-center ps-6 pe-5 pt-5 pb-2">
      <router-link
        to="/"
        class="d-flex align-center text-decoration-none"
      >
        <v-img
          :src="require('@/assets/images/img/logo.png')"
          max-height="220px"
          max-width="220px"
          alt="logo"
          contain
          eager
          class="app-logo me-3"
        ></v-img>
      </router-link>
    </div>

    <!-- Navigation Items -->
    <nav-menu-section-title title="Módulo de Usuario"></nav-menu-section-title>
    <v-list
      expand
      shaped
      class="vertical-nav-menu-items pr-2"
    >
      <nav-menu-link
        title="Asignación de Recursos"
        :to="{ name: 'recurso' }"
        :icon="icons.mdiFileDocument">
      </nav-menu-link>
      <nav-menu-link
        title="Gestión de Nodos"
        :to="{ name: 'aprobacion' }"
        :icon="icons.mdiBookCheck">
      </nav-menu-link>
      <nav-menu-link
        title="Gestión de Dispositivos"
        :to="{ name: 'autorizacion' }"
        :icon="icons.mdiCalendarMultipleCheck">
      </nav-menu-link>
      <nav-menu-link
        title="Gestión de Usuarios"
        :to="{ name: 'autorizacion' }"
        :icon="icons.mdiCalendarMultipleCheck">
      </nav-menu-link>
      <nav-menu-link
        title="Vista por Dispositivo"
        :to="{ name: 'autorizacion' }"
        :icon="icons.mdiCalendarMultipleCheck">
      </nav-menu-link>
      <nav-menu-link
        title="Reportes"
        :to="{ name: 'autorizacion' }"
        :icon="icons.mdiCalendarMultipleCheck">
      </nav-menu-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import {
  mdiFileDocument,
  mdiBookCheck,
  mdiCalendarMultipleCheck

} from '@mdi/js'
import NavMenuSectionTitle from './components/NavMenuSectionTitle.vue'
import NavMenuLink from './components/NavMenuLink.vue'

export default {
  components: {
    NavMenuSectionTitle,
    NavMenuLink,
  },
  props: {
    isDrawerOpen: {
      type: Boolean,
      default: null,
    },
  },
  setup() {
    return {
      icons: {
        mdiFileDocument,
        mdiBookCheck,
        mdiCalendarMultipleCheck

      },
    }
  },
}
</script>

<style lang="scss" scoped>

.alternate-icon-small {
  font-size: 14px;
  height: 14px;
  width: 14px;
}

.vertical-nav-menu-link {
  &.v-list-item--active {
    box-shadow: 0 5px 10px -4px rgba(94, 86, 105, 0.42);
    @include elevationTransition();
  }
}


.app-title {
  font-size: 1.25rem;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.3px;
}

// ? Adjust this `translateX` value to keep logo in center when vertical nav menu is collapsed (Value depends on your logo)
.app-logo {
  transition: all 0.18s ease-in-out;
  .v-navigation-drawer--mini-variant & {
    transform: translateX(-4px);
  }
}

@include theme(app-navigation-menu) using ($material) {
  background-color: map-deep-get($material, 'background');
}

.app-navigation-menu {
  .v-list-item {
    &.vertical-nav-menu-link {
      ::v-deep .v-list-item__icon {
        .v-icon {
          transition: none !important;
        }
      }
    }
  }
}

// You can remove below style
// Upgrade Banner
.app-navigation-menu {
  .upgrade-banner {
    position: absolute;
    bottom: 13px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
