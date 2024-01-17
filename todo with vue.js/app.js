const app = Vue.createApp({
    data() {
      return {
        name: 'Cícero Feijó',
        task: '',
        selectedItem: null,
        selectedTask: {},
        showModal: false,
        todos: [
          { title: 'Learn Vue.JS', status: 'done' },
          { title: 'Learn Kubernetes', status: 'pending' },
          { title: 'Learn about CDN Structure', status: 'pending' },
        ],
      };
    },
    methods: {
      toggleModal(index) {
        this.showModal = !this.showModal;
  
        if (index !== undefined) {
          this.selectedItem = index;
          this.selectedTask = this.todos[index];
        }
      },
      addTask() {
        if (this.task !== '') {
          this.todos.push({
            title: this.task,
            status: 'pending',
          });
        }
        this.task = '';
      },
      removeTask() {
        this.todos.splice(this.selectedItem, 1);
        this.showModal = false;
      },
      toggleStatus(index) {
        this.todos[index].status = this.todos[index].status === 'pending' ? 'done' : 'pending';
      },
    },
  });
  
  app.mount('#app');
  