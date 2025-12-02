export default class PostService {
  constructor(http, tokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }

  async getPosts(userid) {}

  async createPost(text) {
    return this.http.fetch(`/post`, {
      method: "POST",
      headers: this.getHeaders(),
      body: JSON.stringify({ text, userid: "heeyoung", name: "희영" }),
    });
  }

  async deletePost(postId) {}

  async updatePost(postId, text) {}

  getHeaders() {
    const token = this.tokenStorage.getToken();
    return {
      Authorization: `Bearer ${token}`,
    };
  }
}
