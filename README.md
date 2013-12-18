# ドットインストール AngularJS入門 (全12回)

AngularJS入門 (全12回)の写経をしたものです。

see. http://dotinstall.com/lessons/basic_angularjs

## ハマったとこ
* 半角スペースなしの場合にエラーとなっているのに気がつかなかった

###
    <select ng-model="user.color" ng-options="'label:'+color for color in ['red','blue','pink']" ng-init="user.color='red'"></select>
    のコードを書いているときにin ['red','blue','pink']の箇所をin['red','blue','pink']とスペースなしだと動かなかったこと
