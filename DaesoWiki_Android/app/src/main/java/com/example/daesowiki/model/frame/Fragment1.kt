package com.example.daesowiki.model.frame

import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.lifecycle.Observer
import androidx.recyclerview.widget.LinearLayoutManager
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
    val allList = ArrayList<ListData.Post>()
    var searchAdapter: SearchAdapter? = null
    lateinit var myAPI: Dao
    lateinit var retrofit: Retrofit

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        val view = inflater.inflate(R.layout.activity_fragment1, container, false)

        return view
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        searchAdapter = SearchAdapter(activity!!.applicationContext, list)
        recycler_view.adapter = searchAdapter

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
                    list.clear()
                    list.addAll(response.body()!!.data.posts)
                    allList.clear()
                    allList.addAll(response.body()!!.data.posts)
                    searchAdapter?.notifyDataSetChanged()
                }
            }
        })

        (activity as HomeActivity).searchClickEvent.observe(viewLifecycleOwner, Observer {
            myAPI.search(it!!).enqueue(object : Callback<ListData>{
                override fun onFailure(call: Call<ListData>, t: Throwable) {
                    Log.e("e", t.message!!)
                }

                override fun onResponse(
                    call: Call<ListData>,
                    response: Response<ListData>
                ) {
                    Log.d("i", "i")

                    if(response.code() == 200){
                        list.clear()
                        list.addAll(response.body()!!.data.posts)
                        searchAdapter?.notifyDataSetChanged()
                    }
                }
            })
        })

        (activity as HomeActivity).categoryClickEvent.observe(viewLifecycleOwner, Observer {
            if (it == 0) {
                list.clear()
                list.addAll(allList)
            }
            else {
                val tempList = allList.filter { value -> value.category == it }
                list.clear()
                list.addAll(tempList)
            }
            searchAdapter?.notifyDataSetChanged()
        })

        searchAdapter?.onClickEvent?.observe(viewLifecycleOwner, Observer {
            Log.d("dd", "dd")
        })
    }
}