package com.example.daesowiki.model.response

import java.util.*

data class ListData (
    val message: String,
    val data: PostList
) {

    data class PostList(
        val posts: List<Post>
    )

    data class Post(
        val idx: Int,
        val title: String,
        val content: String,
        val thumbnail: String,
        val category: Int,
        val createdAt: String,
        val likeCount: Int
    )
}


