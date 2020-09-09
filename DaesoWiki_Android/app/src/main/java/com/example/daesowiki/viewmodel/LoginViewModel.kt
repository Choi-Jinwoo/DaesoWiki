package com.example.daesowiki.viewmodel

import androidx.lifecycle.MutableLiveData
import com.example.daesowiki.base.BaseViewModel
import com.example.daesowiki.SingleLiveEvent
import com.example.daesowiki.model.request.LoginBody
import com.example.daesowiki.model.response.LoginData
import com.example.daesowiki.network.Dao
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import retrofit2.Retrofit

class LoginViewModel : BaseViewModel()  {

    var id = MutableLiveData<String>()
    val pw = MutableLiveData<String>()
    var loginStatus = MutableLiveData<String>()

    val loginBtn = SingleLiveEvent<Unit>()
    val noidBtn = SingleLiveEvent<String>()


    lateinit var myAPI: Dao
    lateinit var retrofit: Retrofit

    fun login() {
        myAPI = retrofit.create(Dao::class.java)
        myAPI.login(
            LoginBody(
                id = id.value.toString(),
                pw = pw.value.toString()
            )
        )
            .enqueue(
                object : Callback<LoginData> {
                    override fun onFailure(call: Call<LoginData>, t: Throwable) {
                    }

                    override fun onResponse(call: Call<LoginData>, response: Response<LoginData>) {
                        loginStatus.value = response.code().toString()
                    }
                });
    }

    fun btnClick() {
        loginBtn.call()
    }

    fun noidClick(){
        noidBtn.call()
    }

}