const service = {
    getClassNameByType: (type) => {
        switch (type.toLowerCase()) {
            case "primary":
                return "btn-primary"
            case "info":
                return "btn-info"
            case "danger":
                return "btn-danger"
            case "warning":
                return "btn-warning"
        }
    }
}

export default service;