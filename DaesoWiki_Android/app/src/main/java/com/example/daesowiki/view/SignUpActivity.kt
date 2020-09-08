package com.example.daesowiki.view

import android.content.Intent
import android.graphics.Color
import android.widget.Toast
import androidx.lifecycle.Observer
import com.example.daesowiki.base.BaseActivity
import com.example.daesowiki.R
import com.example.daesowiki.databinding.ActivitySignUpBinding
import com.example.daesowiki.network.RetrofitClient
import com.example.daesowiki.viewmodel.SignUpViewModel
import kotlinx.android.synthetic.main.activity_sign_up.*

class SignUpActivity : BaseActivity<ActivitySignUpBinding, SignUpViewModel>() {
    override val viewModel: SignUpViewModel = SignUpViewModel()

    override val layoutRes: Int
        get() = R.layout.activity_sign_up


    override fun init() {
        viewModel.retrofit = RetrofitClient.getInstance()

    }

    override fun observerViewModel() {
        with(viewModel) {
            nextBtn.observe(this@SignUpActivity, Observer {
                checkNull()
            })
            checkNull.observe(this@SignUpActivity, Observer {
                if (checkNull.value!!) {
                    setData()
                    signUp()
//                    Toast.makeText(this@SignUpActivity, "성공 회원가입22", Toast.LENGTH_SHORT).show()
//                    var intent = Intent(this@SignUpActivity, HomeActivity::class.java )
//                    startActivity(intent)
//                    finish()
                } else {
                    Toast.makeText(this@SignUpActivity,"빈칸을 채워주세요", Toast.LENGTH_SHORT).show()
                }
            })


            repw.observe(this@SignUpActivity, Observer {
                if (pw.value == repw.value) {
                    sign_ckpw_Tv.setText("비밀번호가 일치합니다")
                    sign_ckpw_Tv.setTextColor(Color.parseColor("#001E58"))
                } else {
                    sign_ckpw_Tv.text = ("비밀번호가 일치하지 않습니다")
                    sign_ckpw_Tv.setTextColor(Color.parseColor("#F74949"))
                }
            })

            signUpStatus.observe(this@SignUpActivity, Observer {
                if (signUpStatus.value == "200") {
                    var intent= Intent(this@SignUpActivity, HomeActivity::class.java)
                    startActivity(intent)
                    Toast.makeText(this@SignUpActivity, "성공 회원가입", Toast.LENGTH_SHORT).show()
                }else if(signUpStatus.value == "400"){
                    Toast.makeText(this@SignUpActivity,"검증오류", Toast.LENGTH_SHORT).show()
                }else{
                    Toast.makeText(this@SignUpActivity,"실패", Toast.LENGTH_SHORT).show()
                }
            })

        }
    }


}