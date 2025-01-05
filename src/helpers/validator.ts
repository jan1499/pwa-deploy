import { printToaster } from "./helpers";

export function validator(divId: string, data: any, isPrint = false) {
    let errObj = {} as unknown as any;
    let tags = [] as unknown as any;

    let div = document.getElementById(divId);
    if (div) tags = div.getElementsByClassName("validation");
    // Removing previous feedback error messages
    clearErrMsgs(divId);

    for (let i = 0; i < tags.length; i++) {
        let tag: HTMLInputElement = tags[i];
        let element = tag.attributes.getNamedItem('name')?.value ?? '';

        if (!element && tag.nodeName === "DIV") {
            element = tag.attributes.getNamedItem('data-name')?.value ?? '';

        }

        if (element) {
            let validatesArray = tag.attributes.getNamedItem('data-validation')?.value.split(',');
            let fieldName = element.replace(/_/g, ' ').replace(/[0-9]/g, '');

            // REQUIRED Validation
            if (validatesArray?.includes('required') && !data[element]) {
                errObj[element] = `This ${fieldName} cannot be empty`
            }

            // MAX Validation
            let max = validatesArray?.find(x => x.includes("max"));
            if (max) {
                let val = max.split(':')[1];
                if (tag?.type == "text" && data[element] && data[element].length > val) errObj[element] = `Maximum ${val} characters only allowed`;
                if (tag?.type == "number" && data[element] && Number(data[element]) > Number(val)) errObj[element] = `Maximum value is ${val}`;
            }

            // MIN Validation
            let min = validatesArray?.find(x => x.includes("min"));
            if (min) {
                let val = min.split(':')[1];
                if (tag?.type == "text" && data[element] && data[element].length < val) errObj[element] = `Maximum value is ${val}`;
                if (tag?.type == "number" && data[element] && Number(data[element]) > Number(val)) errObj[element] = `Maximum value is ${val}`;
            }

            // FILE SIZE Validation
            if (validatesArray?.includes('file_size')) {
                if (data[element] && data[element].size / 1024 / 1024 > 10) {
                    errObj[element] = "This file size should be less than 10MB"
                }
            }

            // EMAIL Validation
            if (validatesArray?.includes('email') && data[element]) {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data[element])) {
                    errObj[element] = "Invalid email format"
                }
            }
        }


        if (isPrint && errObj[element]) {
            printErrMsg(tag, errObj[element]);
        }
    }

    if (Object.keys(errObj).length > 0) {
        printToaster("Please review your data and resubmit.", "ERROR")
    }

    return {
        isValid: Object.keys(errObj).length === 0,
        errors: errObj
    };
}

// export function printApiErrorMsgs(divId: string, error: any) {


//     clearErrMsgs(divId)
//     let div = document.getElementById(divId);
//     if (div) {
//         Object?.keys(error).forEach((key: string) => {
//             let ele = div?.querySelectorAll(`[name="${key}"]`);
//             if (ele && ele.length > 0) {
//                 printErrMsg(ele[0] as HTMLInputElement, error[`${key}`][error[`${key}`].length - 1]);
//             } else {
//                 let ele = div?.querySelectorAll(`[data-error="${key}"]`);
//                 if (ele && ele.length > 0) {
//                     printErrMsg(ele[0] as HTMLInputElement, error[`${key}`][error[`${key}`].length - 1]);
//                 }
//             }
//         })
//     }
// }

export function printApiErrorMsgs(divId: string, error: any) {
    clearErrMsgs(divId)
    let div = document.getElementById(divId);
    if (div) {
        error.forEach((err: any) => {
            let key = err.loc[1]; 
            let ele = div?.querySelectorAll(`[name="${key}"]`);
            if (ele && ele.length > 0) {
                printErrMsg(ele[0] as HTMLInputElement, err.msg);
            } else {
                let ele = div?.querySelectorAll(`[data-error="${key}"]`);
                if (ele && ele.length > 0) {
                    printErrMsg(ele[0] as HTMLInputElement, err.msg);
                }
            }
        });
    }
}


export function printErrMsg(tag: HTMLInputElement, error: string) {
    tag.className = tag.className + ' is-invalid';
    let newNode: HTMLDivElement = document.createElement("div");
    newNode.className = "invalid-feedback";
    newNode.innerHTML = error;
    tag.after(newNode)
}

// export function clearErrMsgs(divId: string) {
//     let tags = [] as unknown as any;
//     let div = document.getElementById(divId);
//     if (div) tags = div.getElementsByClassName("validation");
//     for (let i = 0; i < tags.length; i++) {
//         const tag: HTMLInputElement = tags[i];
//         tag.className = tag.className.replace('is-invalid', '');
//         if (tag.nextElementSibling?.className == "invalid-feedback") tag.nextElementSibling?.remove();
//     }
// }

export function clearErrMsgs(divId: string) {
    let div = document.getElementById(divId);
    if (div) {
        let tags = div.getElementsByClassName("validation");
        for (let i = 0; i < tags.length; i++) {
            const tag = tags[i] as HTMLElement;
            tag.classList.remove('is-invalid');
            if (tag.nextElementSibling?.classList.contains("invalid-feedback")) {
                tag.nextElementSibling.remove();
            }
        }
    }
}
