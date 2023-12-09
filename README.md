![Logo-nav](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png)

### Learning Goals:

The aim of this lab is to use `React Hook Forms` - in order to implement a form. The design can be similar to what you made in the previous lab on `forms`. But this time, instead of using `event handlers` we will be using `React Hook Forms` to achieve the same target - which is to create a form.

***NOTE:*** Once you complete this lab - then it's up to you to decide - as which way is better or when to use which way in order to implement forms using react. So, it will be really good for your learning, if you complete this lab and along with that - compare the differences between the previous approach (usign event handlers) that you used to create a form with this approach (using Hooks) to create a form.


### Steps:

1. Create a new project. ( Hope you remember the command now 🙂).
2. Create a form using `useForm` hook. -> Remember to install it before using it by the following command:
    `npm install react-hook-form`
3. Your form should include the following fields:

    1. First Name 
    2. Last Name
    3. Email  --> Constraints that must be there for this field: 
        1. you should not be able to submit the form, if the email id is not valid. If the email id is not valid it should give an error message as: `invalid email`.
        
        **Invalid email:** For now, you can consider that, an email is invalid, if `@` symbol is not added.

        Here is a demo for you:

        ![email](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/react-useForm-email-validation.gif)



    4. Password --> Constraints that must be there for this field:
        1. you should not be able to submit the form, if the password is less than 5 characters or greater than 20 characters. If the password is less than 4 characters then it should throw an error as `Password must be more than 4 characters` and if the password is more than 20 characters then it should throw an error as `Password cannot be more than 20 characters`

        Here is a demo for you:

        ![password](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/react-useForm-password-validation.gif)

        

  You should not be able to submit the form, if any one of the field is empty. All the field must be filled ( satisfying the above mentioned constraints ) only then you should be able to submit the form succesfully.

  Here is a gif, which shows a succesful submition:

  ![complete](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/react-useForm-complete.gif)

  Here is a gif, which shows, that if any field is empty -> error messages must be displayed.
  
  ![incomplete](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/react-useForm-incomplete.gif)

  
### Version Alert !!

One very important thing to note is that, there have been a minor change in the sytax of `useForm hook`.
Go through the following description to understand better.


Simple input with required and errors.message features, necessary changes in update:

From version 6.x.x:

```js

function MyComponent(props) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (values) => {...};

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="message"
          autoComplete="off"
          ref={register({
            required: "Required",
          })}
        />
        {errors.message && errors.message.message}
        <input type="submit" />
      </form>
    </div>
  );
}

```


To version 7.x.x:


```js

function MyComponent(props) {
  // check how errors are being exported
  const { register, handleSubmit, formState: { errors }} = useForm();

  const onSubmit = (values) => {...};

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="message"
          autoComplete="off"

          // check how register is being used.
          {...register("message", {
            required: "Required",
          })}
        />
        {errors.message && errors.message.message}
        <input type="submit" />
      </form>
    </div>
  );
}

```

In addition to register fix, if you use errors from useForm(), now errors feature is exported from formState.

Feel free to go through the following link for more information about the change in the syntax:

[Syntax Change](https://stackoverflow.com/questions/66927051/getting-uncaught-typeerror-path-split-is-not-a-function-in-react)

Happy Coding ❤️!