<template>
  <div>
    <h1>Comment Table</h1>
    <CommentTable :comments="comments" />
  </div>
</template>

<script>
import { fetchComments } from '@/services/api';
import CommentTable from '@/components/CommentTable.vue';

export default {
  components: { CommentTable },
  data() {
    return {
      comments: []
    };
  },
  async mounted() {
    this.comments = await fetchComments();
  }
};
</script>
