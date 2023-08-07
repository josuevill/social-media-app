export const emailValidate = {
    required: {
        value: true,
        message: "Ingrese un correo electrónico válido",
    },
    pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Correo electrónico no válido",
    },
};

export const passwordValidate = {
    required: {
        value: true,
        message: "Ingrese una contraseña",
    },
    minLength: {
        value: 6,
        message: "La contraseña debe contar con al menos 6 caracteres",
    },
};

export const usernameValidate = {
    required: {
        value: true,
        message: "Ingrese un nombre de usuario"
    },
    minLength: {
        value: 6,
        message: "El nombre de usuario debe tener al menos 6 caracteres"
    },
    pattern: {
        value: /^[a-zA-Z0-9]+$/,
        message: "el nombre de usuario debe contener letras y números",
    },
};

export const olderValidate = {
    required: {
        value: true,
        message: "Tiene que marcar la casilla"
    }
}
