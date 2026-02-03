
import { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

function Logimine() {

    const kasutajaNimiRef = useRef();
    const paroolRef = useRef();
    const [paroolKorrektne, setParoolKorrektne] = useState(true);
    const [sisselogitud, muudaSisselogitud] = useState("ei");
    const [sonum, muudaSonum] = useState("");

    const kontrolliParooli = () => {
        if (paroolRef.current.value.length >= 8 &&
        paroolRef.current.value.toLowerCase() !== paroolRef.current.value &&
        paroolRef.current.value.toUpperCase() !== paroolRef.current.value &&
        paroolRef.current.value.includes("%") === true) {
        setParoolKorrektne (true);
        } else {
        setParoolKorrektne(false);
        }
    }

    const logiSisse = () => {
        // Pikkus on väiksem kui 8
        if (paroolRef.current.value.length < 8) {
            toast.error("Liiga lühike");
            return;
        }

        // Kõik väikesteks tähtedeks teisendatuna on identne mis originaal
        if (paroolRef.current.value.toLowerCase() === paroolRef.current.value) {
            toast.error("Peab sisaldama suurt tähte");
            return;
        }

        // Kõik suurteks tähtedeks teisendatuna on identne mis originaal
        if (paroolRef.current.value.toUpperCase() === paroolRef.current.value) {
            toast.error("Peab sisaldama väikest tähte");
            return;
        }

        // Ei sisalda protsenti on false
        if (paroolRef.current.value.includes("%") === false) {
            toast.error("Peab sisaldama protsenti");
            return;
        }

        if (paroolRef.current.value === "Aa123456%") {
            muudaSisselogitud("jah");
            muudaSonum(kasutajaNimiRef.current.value + ", oled sisselogitud");
            toast.success("Edukalt sisse logitud!");
            return;
        }

        muudaSonum("Vale parool");
        toast.error("Vale parool");
        return;
    }

    const logiValja = () => {
        muudaSisselogitud("ei");
        muudaSonum("");
    }

return (
        <div>
            <div>{sonum}</div>
            {sisselogitud === "ei" && <div>
                <label>Kasutajanimi</label> <br />
                <input ref={kasutajaNimiRef} type="text" /> <br />
                <label>Parool</label> <br />
                <input ref={paroolRef} onChange={kontrolliParooli} type="password" /> <br /><br />
                {paroolKorrektne === false && <div>Parool pole korrektne</div>}
                <button onClick={logiSisse}>Logi sisse</button>
            </div>}
            {sisselogitud === "jah" && <button onClick={logiValja}>Logi välja</button>}
            
            <ToastContainer
            position="bottom-right"
            autoClose={4000}
            theme="dark"/>

        </div>
    )
}

export default Logimine