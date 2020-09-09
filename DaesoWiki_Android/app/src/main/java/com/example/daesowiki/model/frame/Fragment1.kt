package com.example.daesowiki.model.frame

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.lifecycle.Observer
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.example.daesowiki.R
import com.example.daesowiki.model.SearchAdapter
import com.example.daesowiki.model.response.ListData
import com.example.daesowiki.network.Dao
import com.example.daesowiki.network.RetrofitClient
import com.example.daesowiki.view.HomeActivity
import kotlinx.android.synthetic.main.activity_fragment1.*
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import retrofit2.Retrofit

class Fragment1 : Fragment() {

    val list = ArrayList<ListData.Post>()
    lateinit var myAPI: Dao
    lateinit var retrofit: Retrofit

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        val view = inflater.inflate(R.layout.activity_fragment1, container, false)

        return view
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        val lm = LinearLayoutManager(activity!!.applicationContext)
        recycler_view.layoutManager = lm
        recycler_view.setHasFixedSize(true)

        retrofit = RetrofitClient.getInstance()
        myAPI = retrofit.create(Dao::class.java)
        myAPI.list_get().enqueue(object : Callback<ListData>{
            override fun onFailure(call: Call<ListData>, t: Throwable) {
                Log.e("e", t.message!!)
            }

            override fun onResponse(
                call: Call<ListData>,
                response: Response<ListData>
            ) {
                Log.e("i", "i")

                if(response.code() == 200){
                    val searchAdapter = SearchAdapter(activity!!.applicationContext, list)
                    recycler_view.adapter = searchAdapter
                    list.clear()
                    list.addAll(response.body()!!.data.posts)
                    searchAdapter.notifyDataSetChanged()
                }
            }
        })

        (activity as HomeActivity).searchClickEvent.observe(viewLifecycleOwner, Observer {
            Log.d("aa", "dd")
        })

    }
}