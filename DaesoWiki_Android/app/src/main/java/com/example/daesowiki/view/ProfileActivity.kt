package com.example.daesowiki.view

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.service.autofill.UserData
import com.example.daesowiki.Myapplication
import com.example.daesowiki.PreferenceUtil
import com.example.daesowiki.R
import kotlinx.android.synthetic.main.activity_home.*
import kotlinx.android.synthetic.main.activity_login.*
import kotlinx.android.synthetic.main.activity_profile.*
import java.sql.PreparedStatement

class ProfileActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_profile)

        id_Tv.text= intent.getStringExtra("Profile2").toString()
        grade_Tv.text= PreferenceUtil(this@ProfileActivity).getGrade("signUpGrade", "학년정보 없음")+"학년"

        back_Btn.setOnClickListener {
            var intent = Intent(this@ProfileActivity, HomeActivity::class.java)
            startActivity(intent)
            finish()
        }
    }
}