import { createRouter, createWebHashHistory } from 'vue-router';

// app router configuration
export const router = createRouter ({
  history: createWebHashHistory('/'),
  routes: [
    {
        path: '/login',
        name: 'login',
        meta: {
            title: 'Login',
            requiresAuth: false,
        },
        // Lazy load the Login component
        // This helps to reduce the initial load time of the application
        // by splitting the code into smaller chunks
        // and loading them only when needed.
        component: () => {
            return import('@/views/sys/login/index.vue')
        }
    },
    {
        path: '/',
        name: 'home',
        meta: {
            title: 'Home',
        },
        // Lazy load the Home component
        component: () => {
            return import('@/views/sys/home/index.vue')
        }
    }]
});