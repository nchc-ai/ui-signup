import React from 'react';
import {
  required, mailIsValid, atLeastSix, samePassword, keyValRequired
} from '../libraries/validation';

// auth ----------------------------------------

export const signupForm = [
  {
    key: 1,
    size: 12,
    name: 'username',
    inputType: 'text',
    mainLabel: '帳號',
    placeholder: '請輸入您欲註冊的信箱',
    validators: { required },
    errorMessage: {
      required: '您尚未輸入字元'
    },
    isRequired: true
  }, {
    key: 2,
    size: 12,
    name: 'cName',
    inputType: 'text',
    mainLabel: '中文姓名',
    placeholder: '請輸入中文姓名',
    validators: { required },
    errorMessage: {
      required: '您尚未輸入中文姓名'
    },
    isRequired: true
  },  {
    key: 3,
    size: 12,
    name: 'password',
    inputType: 'password',
    mainLabel: '密碼',
    placeholder: '請輸入您的密碼',
    validators: { atLeastSix },
    errorMessage: {
      atLeastSix: '密碼至少需為 6 個字元'
    },
    isRequired: true
  }, {
    key: 4,
    size: 12,
    name: 'confirmPassword',
    inputType: 'password',
    mainLabel: '密碼確認',
    placeholder: '請再次輸入您的密碼',
    validators: { required },
    errorMessage: {
      required: '密碼至少需為 6 個字元'
    },
    isRequired: true
  }, {
    key: 5,
    size: 12,
    name: 'role',
    radioKey: 1,
    inputType: 'radio',
    mainLabel: '選擇註冊身份',
    className: 'fl',
    target: 'signup',
    options: [
      {
        key: 1,
        radioKey: '1-1',
        label: '老師',
        value: 'teacher'
      }, {
        key: 2,
        radioKey: '1-2',
        label: '管理員',
        value: 'superuser'
      }
    ],
    isRequired: true,
    validators: { required },
    errorMessage: {
      required: '您尚未選擇身份'
    }
  }
];
