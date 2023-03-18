import increaseVisitCount from './incrementVisitCount';
import getVisitCount from './getVisitCount';
//
//
import addQuestion from './addQuestion';
import deleteQuestion from './deleteQuestion';
import addAllQuestions from './addAllQuestions';
import getAllQuestions from './getAllQuestions';
import updateQuestionAnswerPercentage from './updateQuestionAnswerPercentage';


exports.handler = async (event: any) => {
    switch (event.info.fieldName) {
        case "increaseVisitCount":
            return await increaseVisitCount();

        case "getVisitCount":
            return await getVisitCount();
        //
        //
        case "addQuestion":
            return await addQuestion(event.arguments);

        case "deleteQuestion":
            return await deleteQuestion(event.arguments);

        case "addAllQuestions":
            return await addAllQuestions(event.arguments);

        case "getAllQuestions":
            return await getAllQuestions();

        case "updateQuestionAnswerPercentage":
            return await updateQuestionAnswerPercentage(event.arguments);

        default:
            return null;
    }

}