import * as React from 'react'
import { useForm, ErrorMessage } from 'react-hook-form'

// custom imports
import Error from './Error'

export default ({ onSubmit, action }) => {
  const { register, handleSubmit, errors } = useForm()

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Board Title"
          name="title"
          ref={register({
            required: 'Please give me a valid title',
            maxLength: 100,
            minLength: 5,
          })}
        />

        <input
          placeholder="Board Description"
          name="description"
          ref={register({
            required: 'Please give me a valid description',
            maxLength: 100,
            minLength: 5,
          })}
        />

        <button type="submit">{action}</button>
      </form>
      <Error>
        <ErrorMessage errors={errors} name="title" />
        <ErrorMessage errors={errors} name="description" />
      </Error>

      <style jsx>
        {`
          input,
          button {
            min-height: 2rem;
            padding: 0 1em;
            margin: 0;
            font-size: 1rem;
            text-align: center;
            color: var(--dark);
            font-family: var(--font-family);
            box-sizing: border-box;
            margin-top: 1rem;
          }

          button {
            background: var(--tertiary);
            border: none;
          }

          form {
            width: 100%;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}
