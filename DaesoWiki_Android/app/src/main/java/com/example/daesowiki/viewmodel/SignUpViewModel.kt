package com.example.daesowiki.viewmodel

import android.util.Log
import androidx.lifecycle.MutableLiveData
import com.example.daesowiki.base.BaseViewModel
import com.example.daesowiki.Myapplication
import com.example.daesowiki.SingleLiveEvent
import com.example.daesowiki.model.SignUpBody
import com.example.daesowiki.model.SignUpData
import com.example.daesowiki.network.Dao
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import retrofit2.Retrofit

class SignUpViewModel : BaseViewModel() {

    val id = MutableLiveData<String>()
    val pw = MutableLiveData<String>()
    val repw = MutableLiveData<String>()
    val grade = MutableLiveData<String>()
    var checkNull = MutableLiveData<Boolean>()
    var signUpStatus = MutableLiveData<String>()

    val nextBtn = SingleLiveEvent<String>()

    lateinit var myAPI: Dao
    lateinit var retrofit: Retrofit


    fun checkNull() {
        checkNull.value = id.value != null && pw.value != null && grade.value != null
    }

    fun setData() {
        Myapplication.prefs.setId("signUpId", id.value)
        Myapplication.prefs.setPw("signUpPw", pw.value)
        Myapplication.prefs.setGrade("signUpGrade", grade.value)
    }

    fun signUp() {
        myAPI = retrofit.create(Dao::class.java)
        myAPI.signUp(
            SignUpBody(
                id = Myapplication.prefs.getId("signUpId", "없음"),
                pw = Myapplication.prefs.getPw("signUpPw", "없음"),
                grade = Myapplication.prefs.getGrade("signUpGrade", "없음"))
        ).enqueue(
            object : Callback<SignUpData> {
                override fun onFailure(call: Call<SignUpData>, t: Throwable) {
                    Log.e("e", t.message!!)
                }

                override fun onResponse(
                    call: Call<SignUpData>,
                    response: Response<SignUpData>
                ) {
                    Log.d("LOG", "singup  ${response.code()}")
                    signUpStatus.value = response.code().toString()
                }
            })
    }

    fun nextBtnClick(){
        nextBtn.call()
    }

}