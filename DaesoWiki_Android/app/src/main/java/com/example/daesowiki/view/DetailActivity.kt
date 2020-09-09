package com.example.daesowiki.view

import android.annotation.SuppressLint
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.bumptech.glide.Glide
import com.example.daesowiki.R
import android.util.Log
import com.bumptech.glide.load.engine.DiskCacheStrategy
import com.example.daesowiki.model.response.ListData
import kotlinx.android.synthetic.main.activity_detail.*

class DetailActivity : AppCompatActivity() {
    @SuppressLint("SetTextI18n")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_detail)

        val post = intent.getSerializableExtra("post") as ListData.Post

        textView7.text = post.title
        textView8.text = post.category.toString() + "학년"
        textView9.text = post.content
        like_count.text = post.likeCount.toString() + "개"


        back_Btn2.setOnClickListener {
            var intent = Intent(this@DetailActivity, HomeActivity::class.java)
            startActivity(intent)
        }
    }
}