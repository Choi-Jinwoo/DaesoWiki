package com.example.daesowiki.view

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.fragment.app.Fragment
import com.example.daesowiki.R
import com.example.daesowiki.SingleLiveEvent
import com.example.daesowiki.model.frame.Fragment1
import com.example.daesowiki.model.frame.Fragment2
import com.example.daesowiki.model.frame.Fragment3
import com.example.daesowiki.model.frame.Fragment4
import kotlinx.android.synthetic.main.activity_home.*

class HomeActivity : AppCompatActivity() {

    val searchClickEvent = SingleLiveEvent<Unit>()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_home)

        setFrag(0)

        main_Btn.setOnClickListener{
            setFrag(0)
        }

        search_Btn.setOnClickListener {
            searchClickEvent.call()
        }

//        first_Btn.setOnClickListener {
//            setFrag(1)
//        }
//        second_Btn.setOnClickListener {
//            setFrag(2)
//        }
//        third_Btn.setOnClickListener {
//            setFrag(3)
//        }
    }
    private fun setFrag(fragNum : Int) {
        val ft = supportFragmentManager.beginTransaction() //화면 교체를 위한 트랜잭션
        when(fragNum){
            0 -> {
                ft.replace(R.id.main_frame, Fragment1()).commit()
            }
//            1 ->{
//                ft.replace(R.id.main_frame, Fragment2()).commit()
//            }
//            2->{
//                ft.replace(R.id.main_frame, Fragment3()).commit()
//            }
//            3->{
//                ft.replace(R.id.main_frame, Fragment4()).commit()
//            }
        }
    }

}