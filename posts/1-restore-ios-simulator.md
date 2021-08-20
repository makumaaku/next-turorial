---
title: 'iOS DeviceSupportを削除後にiosシミュレータが動かなくなる問題の解決策'
date: '2021-06-29'
imageUrl: 'https://mark-saito-next-blog.s3.ap-northeast-1.amazonaws.com/blog/1-ios-simulator-failed.jpg'
tag: 'Xcode'

---

## iOS DeviceSupportを削除したら[Unable to boot device because it cannot be located on disk.]

[DaisyDisk](https://daisydiskapp.com/)でUser/user名/ライブラリ/Develop/iOS DeviceSupport を削除してしまったら、iosシミュレーターが動かなくなってしまいました。

> Unable to boot device because it cannot be located on disk.
> Use the device manager in Xcode or the simctl command line tool to either delete the device properly or erase contents and settings.

上記のようなエラーメッセージが出ました。


## 解決方法

1. 以下のコマンドをターミナルで入力
```
xcrun simctl erase all
```

2. 再起動

この手順で修正できました。

