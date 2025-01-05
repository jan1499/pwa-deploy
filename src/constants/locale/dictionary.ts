import { common } from "./en/common";
import { common as taCommon } from "./ta/common";
import { common as siCommon } from "./si/common";
import { msg } from "./en/msg/hr";
import { msg as taHrMsg } from "./ta/msg/hr";
import { msg as siHrMsg } from "./si/msg/hr";
import { note } from "./en/note/hr";
import { note as taHrNote } from "./ta/note/hr";
import { note as siHrNote } from "./si/note/hr";
import { other } from "./en/other/hr";
import { other as taHrOther } from "./ta/other/hr";
import { other as siHrOther } from "./si/other/hr";
import { msg as CoreMsg  } from "./en/msg/core";
import { msg as taCoreMsg } from "./ta/msg/core";
import { msg as siCoreMsg } from "./si/msg/core";
import { note as CoreNote} from "./en/note/core";
import { note as taCoreNote } from "./ta/note/core";
import { note as siCoreNote } from "./si/note/core";
import { other as CoreOther } from "./en/other/core";
import { other as taCoreOther } from "./ta/other/core";
import { other as siCoreOther } from "./si/other/core";

export const dic: any = {
    ta: {
        common: taCommon,
        hrMsg: taHrMsg,
        hrNote: taHrNote,
        hrOther: taHrOther,
        coreMsg: taCoreMsg,
        coreNote: taCoreNote,
        coreOther: taCoreOther,
    },
    si: {
        common: siCommon,
        hrMsg: siHrMsg,
        hrNote: siHrNote,
        hrOther: siHrOther,
        coreMsg: siCoreMsg,
        coreNote: siCoreNote,
        coreOther: siCoreOther,
    },
    en: {
        common: common,
        hrMsg: msg,
        hrNote: note,
        hrOther: other,
        coreMsg:CoreMsg,
        coreNote:CoreNote,
        coreOther:CoreOther,
    },
}