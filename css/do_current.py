# coding: utf-8
'''
Created on July 05, 2020
Update  on 2020-07-05
@author: moelody @ https://moelody.com
Desc: Auto compress & minfy JavaScript codes and CSS style sheet
'''
import os
from os import listdir
from os.path import isfile, join
from jsmin import jsmin
from csscompressor import compress
import time
import codecs

localtime = time.asctime( time.localtime(time.time()) )
print (localtime)

jsfiles = [f for f in listdir() if isfile(f) and f.endswith('.js')]
cssfiles = [f for f in listdir() if isfile(f) and f.endswith('.css')]

strJS = '/*! Generate by Moelody. ' + localtime + '*/'
strCSS = '/*! Generate by Moelody. ' + localtime + '*/'

print('------------------Start------------------')

for f in jsfiles:
    with codecs.open(f, 'r', encoding='utf-8') as file:
        data = file.read()
    strJS = strJS + data
    print(f)

JSminified = jsmin(strJS)

with codecs.open("lib.js", "w", encoding='utf-8') as text_file:
    print(JSminified, file=text_file)

print('------------------JS Done------------------')

for f in cssfiles:
    with codecs.open(f, 'r', encoding='utf-8') as file:
        data = file.read()
    strCSS = strCSS + data
    print(f)

CSSminified = compress(strCSS)

with codecs.open("lib.css", "w", encoding='utf-8') as text_file:
    print(CSSminified, file=text_file)

print('------------------CSS Done------------------')

quit()