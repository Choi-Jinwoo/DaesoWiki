import { observable } from 'mobx';
import { autobind } from 'core-decorators';
const axios = require('axios');
const SERVER = require('./config');

@autobind
class PostStore {
  @observable list = [];
  @observable filterList = [];

  getPostList = async () => {
    try {
      const resp = await axios.get(`${SERVER.default}/api/post`);
      const { data } = resp.data;
      this.list = data.posts;
      this.filterList = this.list;
    } catch (err) {
    }
  }

  listFilterWithCategory = (category) => {
    this.filterList = this.list.filter(item => item.category == category);
  }
}

export default new PostStore();
