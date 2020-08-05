import randomcolor from 'randomcolor';
import { useForm } from 'react-hook-form';
import { IoIosCloseCircle } from 'react-icons/io';
import { useCreateBlueprint } from 'src/recoil/hooks';

const CSS = {
  form: 'w-full mb-4',
  inputContainer: 'flex items-center bg-gray-800 rounded-sm border',
  input:
    'bg-transparent w-full px-2 py-1 outline-none rounded text-sm text-gray-600 focus:text-white',
  closeIcon: 'mr-1 cursor-pointer text-gray-600 hover:text-white',
  error: 'block text-red-700 text-xs w-full my-1 px-2',
};

const BlueprintForm = ({ handleHideForm }) => {
  const { register, handleSubmit, errors } = useForm();
  const create = useCreateBlueprint();

  const color = randomcolor({ format: 'hex', luminosity: 'light' });

  const handleOnSubmit = ({ name }) => {
    create({ name, color, code: `# ${name}\n` });
    handleHideForm();
  };

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)} className={CSS.form}>
      <div className={CSS.inputContainer} style={{ borderColor: color }}>
        <input
          type="text"
          name="name"
          placeholder="new blueprint..."
          autoComplete="off"
          autoFocus
          className={CSS.input}
          ref={register({ required: true })}
        />
        <IoIosCloseCircle
          className={CSS.closeIcon}
          size={22}
          onClick={handleHideForm}
        />
      </div>
      {errors.name && <span className={CSS.error}>name is required</span>}
    </form>
  );
};

export default BlueprintForm;
