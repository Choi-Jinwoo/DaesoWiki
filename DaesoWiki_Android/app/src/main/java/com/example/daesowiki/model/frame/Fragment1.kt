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
import com.example.daesowiki.view.HomeActivity
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import retrofit2.Retrofit

class Fragment1 : Fragment() {

    lateinit var list:List<ListData>
    lateinit var recyclerView:RecyclerView
    lateinit var myAPI: Dao
    lateinit var retrofit: Retrofit

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        val view = inflater.inflate(R.layout.activity_fragment1, container, false)

        return view
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        val searchAdapter = SearchAdapter(activity!!.applicationContext, list)
        recyclerView.adapter = searchAdapter

        val lm = LinearLayoutManager(activity!!.applicationContext)
        recyclerView.layoutManager = lm
        recyclerView.setHasFixedSize(true)

        myAPI = retrofit.create(Dao::class.java)
        myAPI.list_get().enqueue(object : Callback<List<ListData>>{
            override fun onFailure(call: Call<List<ListData>>, t: Throwable) {

            }

            override fun onResponse(
                call: Call<List<ListData>>,
                response: Response<List<ListData>>
            ) {
                if(response.code() == 200){
                    searchAdapter.setData(response.body()!!)
                    searchAdapter.notifyDataSetChanged()
                }
            }
        })

        (activity as HomeActivity).searchClickEvent.observe(viewLifecycleOwner, Observer {
            Log.d("aa", "dd")
        })

    }
}