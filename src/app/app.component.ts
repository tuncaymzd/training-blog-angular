import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
        () => {
          resolve(date);
        }, 2000
    );
  });

  posts = [
    {
      title: 'Mon premier post',
      content: 'Isdem diebus Apollinaris Domitiani gener, paulo ante agens palatii Caesaris curam,' +
          ' ad Mesopotamiam missus a socero per militares numeros immodice scrutabatur, an quaedam' +
          ' altiora meditantis iam Galli secreta susceperint scripta, qui conpertis Antiochiae gestis' +
          ' per minorem Armeniam lapsus Constantinopolim petit exindeque per protectores retractus artissime tenebatur.',
      loveIts: 0,
      created_at: this.lastUpdate
    },
    {
      title: 'Mon second post',
      content: 'Intellectum est enim mihi quidem in multis, et maxime in me ipso, sed paulo ante in omnibus,' +
          ' cum M. Marcellum senatui reique publicae concessisti, commemoratis praesertim offensionibus, te ' +
          'auctoritatem huius ordinis dignitatemque rei publicae tuis vel doloribus vel suspicionibus anteferre. ' +
          'Ille quidem fructum omnis ante actae vitae hodierno die maximum cepit, cum summo consensu senatus, tum ' +
          'iudicio tuo gravissimo et maximo. Ex quo profecto intellegis quanta in dato beneficio sit laus, cum in' +
          ' accepto sit tanta gloria.',
      loveIts: 0,
      created_at: this.lastUpdate
    },
    {
      title: 'Mon troisieme post',
      content: 'Emensis itaque difficultatibus multis et nive obrutis callibus plurimis ubi prope Rauracum ventum ' +
          'est ad supercilia fluminis Rheni, resistente multitudine Alamanna pontem suspendere navium conpage Romani ' +
          'vi nimia vetabantur ritu grandinis undique convolantibus telis, et cum id inpossibile videretur, imperator' +
          ' cogitationibus magnis attonitus, quid capesseret ambigebat.',
      loveIts: 0,
      created_at: this.lastUpdate
    }
  ];
}
