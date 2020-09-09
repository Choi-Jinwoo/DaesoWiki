package com.example.daesowiki.view

import android.content.Intent

import android.widget.Toast
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProvider
import com.example.daesowiki.base.BaseActivity
import com.example.daesowiki.R
import com.example.daesowiki.databinding.ActivityLoginBinding
import com.example.daesowiki.network.RetrofitClient
import com.example.daesowiki.viewmodel.LoginViewModel


class LoginActivity : BaseActivity<ActivityLoginBinding, LoginViewModel>() {
    override val viewModel: LoginViewModel
        get() = ViewModelProvider(this)[LoginViewModel::class.java]

    override val layoutRes: Int
        get() = R.layout.activity_login

    override fun init() {
        viewModel.retrofit = RetrofitClient.getInstance()
    }

    override fun observerViewModel() {
        with(viewModel) {
            loginBtn.observe(this@LoginActivity, Observer {
                if (id.value.isNullOrBlank() || pw.value.isNullOrBlank()) {
                    Toast.makeText(this@LoginActivity,"제대로 입력해주시기 바랍니다.", Toast.LENGTH_SHORT).show()
                } else {
                    login()
                }
            })

            loginStatus.observe(this@LoginActivity, Observer {
                if (loginStatus.value == "200") {
                    Toast.makeText(this@LoginActivity, "로그인 성공",Toast.LENGTH_SHORT).show()
                    var intent = Intent(this@LoginActivity, HomeActivity::class.java)
                    intent.putExtra("Profile", id.value)
                    startActivity(intent)
                    finish()
                } else if (loginStatus.value == "400") {
                    Toast.makeText(this@LoginActivity,"검증에 문제가 있습니다.", Toast.LENGTH_SHORT).show()
                } else {
                    Toast.makeText(this@LoginActivity,"존재하지 않거나 잘못된 비밀번호입니다.", Toast.LENGTH_SHORT).show()
                }
            })

            noidBtn.observe(this@LoginActivity, Observer {
                var intent = Intent(this@LoginActivity, SignUpActivity::class.java )
                startActivity(intent)
            })

            }
        }
    }