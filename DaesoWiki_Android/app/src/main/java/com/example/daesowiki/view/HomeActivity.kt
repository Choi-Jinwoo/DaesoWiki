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

    private var mBackWait: Long = 0

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

    override fun onBackPressed() {

        if (System.currentTimeMillis() - mBackWait >= 1500) {
            mBackWait = System.currentTimeMillis()
            Toast.makeText(this, "한번 더 누르면 종료됩니다.", Toast.LENGTH_LONG).show()
        } else {
            moveTaskToBack(true)
            finish()
            android.os.Process.killProcess(android.os.Process.myPid())
        }
    }

}