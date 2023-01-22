import { Field, Form, Formik } from 'formik'
import React, {  } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Spinner } from 'reactstrap'
import { Rating } from 'react-simple-star-rating'
import * as Yup from "yup";

import './Form.scss'
import { useUpdateMutation } from '../../api/helpers/useUpdateMutation'
import { LoadingButton } from '../components/LoadingButton'
import { useGetQuery } from '../../api/helpers/useGetQuery'
function FormRate() {
    
    const loaction= useLocation()
   const history = useNavigate()
    const [Rate , setRate]= React.useState(0)
    const params = new URLSearchParams(loaction.search)
    const {mutate, isLoading} = useUpdateMutation("KEY", '/rate_order_by_form/'+params.get('param'))
    const {data , isLoadingL:Loading, isSuccess} = useGetQuery('KEY','/form_info/' +params.get('param'))
   
   const handelSubmit = (values)=>{
    mutate({
        user_rating:Rate,
        user_feedback:values.sugg
    })
   }
   const handleRating = (rate) => {
    setRate(rate)
  }
  if(Loading){
    return <Spinner />
  }
  if(isSuccess){
    if(data?.order_info?.user_feedback){
        history('form_successful')
    }else{
       
    }
  }

  return (
    <div className='form-home'>
        <div className='w-full flex justify-center'>
            <img src='/logo/logo.svg' className='h-20' alt='logo'/>
        </div>
        <div className='form-input w-[70vw] md:w-[50vw]'>
            <p className='text-white sm:text-[20px] md:text-[24px] font-semibold '>تم توصيل طلبك بنجاح</p>
            <p className='primary sm:text-[17px] md:text-[20px] font-semibold flex justify-center items-center'>تقييم الطلب <img src='/star.svg' alt='star' className='h-5  m-1 svg'  /> </p>
            <strong>كيف كانت تجربة طلبك في ساعي؟</strong>
            <strong className='block'>(تقييمك وملاحظاتك تساعدنا في تطوير خدمة ساعي)</strong>
            <div className='my-7 text-center w-full  '><Rating  initialValue={1}  size={30} onClick={handleRating}/></div>
            <Formik  onSubmit={handelSubmit} validationSchema={getValidationSchema()} initialValues={{sugg:""}}>
                {
                    (formik)=>(
                          <Form className="formik">
                    <label className='font-bold text-[10px]  md:text-[15px] w-[80%]'>شاركنا بأفكارك ومقترحانك</label>
                <div className='w-full'> 
                <Field
                    name="sugg"
                    
                    />
                    {/* <ErrorMessage */}
                    {/* name='sugg' />  */}
                   <span className='text-red-500  w-full text-center font-semibold p-1  block ' >{formik.errors.sugg}</span>
                </div>
                    <LoadingButton isLoading={isLoading} type='submit'  >تأكيد</LoadingButton>
                </Form>
                    )
                }
              
            </Formik>
        </div>
    </div>
  )
}

export default FormRate

export const getValidationSchema = (editMode = false) => {
    return Yup.object().shape({
        sugg:Yup.string().required("مطلوب"),
    });
  };