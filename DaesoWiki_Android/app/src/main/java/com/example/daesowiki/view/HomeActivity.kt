package com.example.daesowiki.view

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Toast
import androidx.fragment.app.Fragment
import com.example.daesowiki.R
import com.example.daesowiki.SingleLiveEvent
import com.example.daesowiki.model.frame.Fragment1
import com.example.daesowiki.model.frame.Fragment2
import com.example.daesowiki.model.frame.Fragment3
import com.example.daesowiki.model.frame.Fragment4
import kotlinx.android.synthetic.main.activity_home.*
import kotlinx.android.synthetic.main.activity_profile.*

class HomeActivity : AppCompatActivity() {

    val searchClickEvent = SingleLiveEvent<String>()
    val categoryClickEvent = SingleLiveEvent<Int>()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_home)

        Log.d("User", intent.getStringExtra("Profile") + " this is id")

        val userId = intent.getStringExtra("Profile")

        name.setOnClickListener {
            var intent = Intent(this@HomeActivity, ProfileActivity::class.java)
            intent.putExtra("Profile2", userId)
            startActivity(intent)
        }

        supportFragmentManager.beginTransaction().replace(R.id.main_frame, Fragment1()).commit()

        categoryClickEvent.value = 0

        main_Btn.setOnClickListener{
            categoryClickEvent.value = 0
        }

        first_Btn.setOnClickListener{
            categoryClickEvent.value = 1
        }

        second_Btn.setOnClickListener{
            categoryClickEvent.value = 2
        }

        third_Btn.setOnClickListener{
            categoryClickEvent.value = 3
        }

        search_Btn.setOnClickListener {
            searchClickEvent.value = search_et.text.toString()
        }
    }
}