var SkillView = {

    Get: function () {
        var skillPk = "skillPk";
        var userPk = "userPk";
        var ApplicationRoot = window.location.origin;

        $.ajax({
            async: true,
            type: 'GET',
            url: ApplicationRoot + '/api/Skills/Updateskill',
            data: { skillPk: 'skillPkValue', userPk: 'userPkValue' },
            contentType: "application/json; charset=utf-8",
            success: function (response) {
                alert(response);
            },
            error: function (xhr) {
                alert("Oops! It appears there has been an error. Please try     again.\n\nError Thrown: " + xhr.responseText);
            }
        });
    }

}

$(function () {
    SkillView.Get();
});