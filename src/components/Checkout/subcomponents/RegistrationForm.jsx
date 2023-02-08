import "./_RegistrationForm.scss";
import { useContext } from "react";
import { CheckoutContext } from "../../Context/CheckoutContext";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const RegistrationForm = ({createOrder}) => {
    const { hadleInputChangeName, hadleInputChangeSurname, hadleInputChangeEmail, hadleInputChangePhone, TextName, TextSurname, TextEmail, TextPhone, count, setCount } = useContext(CheckoutContext);

    const hadleSubmit = (event) => {
        event.preventDefault();

        const ArrayTexts = [TextName, TextSurname, TextEmail, TextPhone];
        const FilterArrayTexts = ArrayTexts.filter(element => element !== "");
        const MySwal = withReactContent(Swal);


        //==========={ Si todo se completa el formulario has esto }===========
        if(FilterArrayTexts.length === ArrayTexts.length){

            MySwal.fire({
                title: '¿Deseas enviar la orden de compra?',
                text: "¿Estás seguro de que escribiste los datos correctos en el formulario?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirmo',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    setCount(count + 1);
                createOrder({count});
                }
            })
        }

        if(FilterArrayTexts.length !== ArrayTexts.length){

            MySwal.fire({
                icon: 'error',
                title: '¡Error!',
                text: 'Debe llenar todos los campos del formulario para poder continuar',
                })
        }
        //==========={ Si todo se completa el formulario has esto }===========
    }

    return(
    <>
        <form action="" className="Form" onSubmit={hadleSubmit}>
            <h3 className="Form__TitleForm">Nombre:</h3>
            <input type="text" placeholder="Ingresa tu nombre" className="Form__InputsTextForm" value={TextName} onChange={hadleInputChangeName}/><br /><br />

            <h3 className="Form__TitleForm">Apellido:</h3>
            <input type="text" placeholder="Ingresa tu apellido" className="Form__InputsTextForm" value={TextSurname} onChange={hadleInputChangeSurname}/><br /><br />

            <h3 className="Form__TitleForm">Email:</h3>
            <input type="text" placeholder="Ingresa tu email" className="Form__InputsTextForm" value={TextEmail} onChange={hadleInputChangeEmail}/><br /><br />

            <h3 className="Form__TitleForm">Número de teléfono:</h3>
            <input type="text" placeholder="Ingresa tu Número de teléfono" className="Form__InputsTextForm" value={TextPhone} onChange={hadleInputChangePhone}/><br /><br />

            <div className="Form__FlexContainerButton">
                <button className="Form__ButtonPay"><h2 className="ButtonPay__Text">Generar orden de compra</h2></button> 
            </div>
        </form>
    </>
    );
}

export default RegistrationForm;