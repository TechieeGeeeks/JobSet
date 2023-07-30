import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';


const validationSchema = yup.object({
    search: yup
        .string('Enter your search query')
        .required('this field can not be empty'),
});

const SearchInputEl = () => {

    const navigate = useNavigate();

    const onSubmit = (values, actions) => {
        //alert(values.search);
        const { search } = values;
        if (search.trim()) {
            navigate(`/search/${search}`);
        } else {
            navigate('/');
        }
        actions.resetForm();
    }

    const { values, errors, touched, handleChange, handleSubmit, isSubmitting } = useFormik({
        initialValues: {
            search: '',
        },

        validationSchema: validationSchema,
        onSubmit
    });

    return (

        <form onSubmit={handleSubmit} className=''>
            <div className="text-center w-full flex gap-1 md:gap-3">
                <input
                    className="md:w-3/4 z-10 w-full border px-2 py-3 rounded-lg"
                    type="text"
                    id="search"
                    name="search"
                    placeholder="ex: developer, front end"
                    value={values.search}
                    onChange={handleChange}
                />
                <button
                    className="bg-lightPrimary text-lightCard md:px-7 px-4 py-3   text-sm rounded-lg"
                    type="submit"
                    disabled={isSubmitting}
                >
                    Search
                </button>
            </div>
            {touched.search && errors.search && (
                <span className="text-orange">{errors.search}</span>
            )}
        </form>


    );
};

export default SearchInputEl;

