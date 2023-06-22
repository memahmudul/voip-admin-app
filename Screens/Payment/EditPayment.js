//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextInputWithLabels from '../../components/TextInputWithLabel';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import { editFirstPaymentValidation, editSecondPaymentValidation } from '../../utils/validations';
import { editFSecondPayment, editFirstPayment } from '../../utils/apiRequest';
import { EDIT_FIRST_PAYMENT, EDIT_SECOND_PAYMENT } from '../../config/urls';
import { showError, showSuccess } from '../../utils/helperFunction';

// create a component
const EditPayment = () => {

   
    const [state, setState] = useState({
        isLoading: false,
        payment_method_1: '',
       payment_method_2: ''
       
    })
    const { isLoading, payment_method_1, payment_method_2 } = state
    const updateState = (data) => setState(() => ({ ...state, ...data }))

    const isFirstPaymentValid = () => {
        const error = editFirstPaymentValidation({
            payment_method_1,
           
        })
        if (error) {
            showError(error)
            return false
        }
        return true
    }


    const isSecondPaymentValid = () => {
        const error = editSecondPaymentValidation({
            payment_method_2,
           
        })
        if (error) {
            showError(error)
            return false
        }
        return true
    }


    const onFirstPaymentEdit = async()=>{
        const checkValid = isFirstPaymentValid()
        if (checkValid) {
            updateState({ isLoading: true })
            try {
                const result = await editFirstPayment(EDIT_FIRST_PAYMENT,{
                    payment_method_1,
                   
                })

                if(result[0]==='edit-first-payment-success'){
                    showSuccess('১ম পেমেন্ট এডিট সফল হয়েছে।')
                    updateState({ isLoading: false })
                    

                }else{
                    

                    showError(result[0])


                    updateState({ isLoading: false })

                }
                
            } catch (error) {
                showError(error)
                updateState({ isLoading: false })
                
            }

        }

    }

    const onSecondPaymentEdit = async()=>{
        const checkValid = isSecondPaymentValid()
        if (checkValid) {
            updateState({ isLoading: true })
            try {
                const result = await editFSecondPayment(EDIT_SECOND_PAYMENT,{
                    payment_method_2,
                   
                })

                if(result[0]==='edit-second-payment-success'){
                    showSuccess('২য় পেমেন্ট এডিট সফল হয়েছে।')
                    updateState({ isLoading: false })
                    

                }else{
                    

                    showError(result[0])


                    updateState({ isLoading: false })

                }
                
            } catch (error) {
                showError(error)
                updateState({ isLoading: false })
                
            }

        }
    }
    return (
        
        <View style={styles.container}>
          <TextInputWithLabels
                label="১ম পেমেন্ট  মেথড"
                placeHolder="১ম পেমেন্ট মেথড টাইপ করুন"
                onChangeText={(payment_method_1) => updateState({ payment_method_1 })}
                
            />

<ButtonWithLoader text="১ম পেমেন্ট এডিট করুন" onPress={onFirstPaymentEdit} isLoading={isLoading}/>

<TextInputWithLabels
                label="২য় পেমেন্ট  মেথড"
                placeHolder="২য় পেমেন্ট মেথড টাইপ করুন"
                onChangeText={(payment_method_2) => updateState({ payment_method_2 })}
                
            />

<ButtonWithLoader text="২য় পেমেন্ট এডিট করুন" onPress={onSecondPaymentEdit} isLoading={isLoading}/>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
      
        backgroundColor: '#2c3e50',
        padding:10
    },
});

//make this component available to the app
export default EditPayment;
