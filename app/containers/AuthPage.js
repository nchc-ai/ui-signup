import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Form, actions as formActions } from 'react-redux-form';
import { notify } from 'react-notify-toast';
import Cookies from 'js-cookie';
import { dayToSecond, redirectUrlWithRole } from '../libraries/utils';
import bindActionCreatorHoc from '../libraries/bindActionCreatorHoc';
import { signupForm } from '../constants/formsData';
import SectionTitle from '../components/common/SectionTitle/index';
import FormGroups from '../components/common/FormGroups/index';
import FormButtons from '../components/common/FormButtons/index';
import logoImg from '../assets/images/auth/login-logo.png';

class AuthPage extends Component {

  componentWillMount() {
    window.scrollTo(0, 0);
    this.props.resetForm();
  }

  componentWillReceiveProps(nextProps) {
  }

  redirect = (payload) => {
    const {
      history,
      authAction
    } = this.props;

    const redirectUrl = redirectUrlWithRole({ role: payload.role });
    history.push(redirectUrl);
  }

  // Signup
  onSignupSubmit = (formData) => {
    console.log('formData', formData);
    this.props.authAction.signup(formData, this.onAfterSubmit);
  }

  onSignupFailed = (formData) => {
    notify.show('請確認是否填妥表單資料', 'error', 1800);
  }

  onAfterSubmit = (response) => {
    console.log('[signup] response', response);
    if (response.error) {
      notify.show(`註冊失敗 失敗原因：${response.payload.response.message}`, 'error', 2700);
    } else {
      notify.show('註冊成功 請輸入帳號密碼進行登入', 'success', 1800);
      this.props.history.push('/login');
    }
  }

  onSignupCancel = (e) => {
    e.preventDefault();
    this.props.resetForm();
  }

  render() {
    const {
      forms,
      changeValue
    } = this.props;

    return (
      <div className="auth-bg global-content">
        <div className="signup-comp">
          <SectionTitle
            isTitleImg
            titleImgUrl={logoImg}
            subTitle={'歡迎註冊 NCHC.ai 教師帳戶'}
            isFloatLeft
          />

          <hr />

          <div className="signup-card-bg">
            <div className="signup-container container">
              <Form
                model="forms.signup"
                className="signup-form-comp"
                onSubmit={formData => this.onSignupSubmit(formData)}
              >
                <div className="row-01">
                  <FormGroups
                    targetForm={forms.signup}
                    formData={signupForm}
                    changeVal={changeValue}
                  />

                  {/* 下方按鈕 */}
                  <FormButtons
                    cancelName="取消"
                    submitName="註冊"
                    backMethod={(e) => this.onSignupCancel(e)}
                    showMode="submit_back"
                    size={4}
                    isForm
                  />

                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ forms, Auth }) => ({
  forms,
  role: Auth.userInfo.role
});

const mapDispatchToProps = dispatch => ({
  resetForm: () => dispatch(formActions.reset('forms.signup')),
  changeValue: (value, key, target) => dispatch(formActions.change(
    `forms.${target}.${key}`,
    value
  ))
});


export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  bindActionCreatorHoc
)(AuthPage);
