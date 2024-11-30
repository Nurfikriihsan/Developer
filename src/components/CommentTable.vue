<template>
  <div>
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search by comment body"
      class="search-bar"
    />
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="comment in filteredComments" :key="comment.id">
          <td>{{ comment.id }}</td>
          <td>{{ comment.name }}</td>
          <td>{{ comment.email }}</td>
          <td>{{ comment.body }}</td>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <button @click="previousPage" :disabled="page === 1">Previous</button>
      <button @click="nextPage" :disabled="page >= totalPages">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comments: Array
  },
  data() {
    return {
      page: 1,
      itemsPerPage: 10,
      searchQuery: ''
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.comments.length / this.itemsPerPage);
    },
    filteredComments() {
      const filtered = this.comments.filter(comment =>
        comment.body.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      const start = (this.page - 1) * this.itemsPerPage;
      return filtered.slice(start, start + this.itemsPerPage);
    }
  },
  methods: {
    nextPage() {
      if (this.page < this.totalPages) this.page++;
    },
    previousPage() {
      if (this.page > 1) this.page--;
    }
  }
};
</script>

<style scoped>
.search-bar {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  padding: 10px;
  border: 1px solid #ddd;
}
.pagination button {
  padding: 10px;
  margin: 10px;
}
</style>
