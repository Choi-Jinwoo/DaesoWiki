package com.example.daesowiki.network

import com.example.daesowiki.model.request.LoginBody
import com.example.daesowiki.model.response.LoginData
import com.example.daesowiki.model.request.SignUpBody
import com.example.daesowiki.model.response.SignUpData
import retrofit2.Call
import retrofit2.http.POST
import retrofit2.http.Body

interface Dao {

    @POST("/api/auth/login")
    fun login(
        @Body loginBody: LoginBody
    ) : Call<LoginData>

    @POST("/api/auth/register")
    fun signUp(
        @Body signUpBody: SignUpBody
    ) : Call<SignUpData>


}