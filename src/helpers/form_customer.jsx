import React from 'react';
import "react-widgets/styles.css";
import DatePicker from "react-widgets/DatePicker";

export const FieldTime = (field) => {
    return (
      <React.Fragment>
        <DatePicker
          {...field}
          name={field.input.name}
          value={ field.input.value ? new Date(field.input.value): null}
          onChange={field.input.onChange}
          // onChange={(value) => field.onChange(value)}
          placeholder={field.placeholder || null}
          className={field.className || null}
          disabled={field.disabled || false}
          readOnly={field.readOnly || false}
          inputProps={{ component: props => <input {...props} readOnly /> }}
          min={field.min || new Date()}
          max={field.max || new Date(2025, 11, 30)}
          dropUp={field.dropUp || false}
          date={field.date || true}
          time={field.time || false}
          normalize={field.normalize || null}
          step={field.step || 60}
          timeFormat={field.timeFormat || 'DD/MM/YYYY HH:mm:ss'}
          formatter={field.timeFormat || 'DD/MM/YYYY HH:mm:ss'}
          format={field.formatter || "DD/MM/YYYY"}
        />
        {field.meta.touched && field.meta.error && <span className="help-block"><small className="text-danger">{field.meta.error}</small></span>}
      </React.Fragment>
    )
  }