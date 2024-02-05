package com.taskassignment;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;

public class UninstallReceiver extends BroadcastReceiver {


    @Override
    public void onReceive(Context context, Intent intent) {
        if (intent.getAction() != null && intent.getAction().equals(Intent.ACTION_PACKAGE_REMOVED)) {
            String packageName = intent.getDataString();
            Log.d("UNINSTALL_RECEIVER", "onReceive:"+packageName);
//            if(packageName != null && packageName.equals("package:your.app.package")) {
        }
        if (intent.getAction() != null && intent.getAction().equals(Intent.ACTION_PACKAGE_FULLY_REMOVED)) {
            String packageName = intent.getDataString();
            Log.d("UNINSTALL_RECEIVER", "onReceive:"+packageName);
        }
        if (intent.getAction() != null && intent.getAction().equals(Intent.ACTION_PACKAGE_REPLACED)) {
            String packageName = intent.getDataString();
            Log.d("UNINSTALL_RECEIVER", "onReceive:"+packageName);
        }
    }
}
