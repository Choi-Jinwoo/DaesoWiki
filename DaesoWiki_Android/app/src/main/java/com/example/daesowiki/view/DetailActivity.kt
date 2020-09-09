package com.example.daesowiki.view

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.daesowiki.R
import kotlinx.android.synthetic.main.activity_detail.*

class DetailActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_detail)

        back_Btn2.setOnClickListener {
            var intent = Intent(this@DetailActivity, HomeActivity::class.java)
            startActivity(intent)
        }
    }
}