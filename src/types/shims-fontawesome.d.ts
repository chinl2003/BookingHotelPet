declare module '@fortawesome/free-solid-svg-icons';
declare module '@fortawesome/free-brands-svg-icons';
declare module '@fortawesome/vue-fontawesome';
declare module '@fortawesome/fontawesome-svg-core';
declare module '@fortawesome/free-regular-svg-icons';
declare module '@fortawesome/free-brands-svg-icons';
declare module '@fortawesome/fontawesome-svg-core/styles.css';
declare module '@fortawesome/vue-fontawesome/styles.css';   

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }