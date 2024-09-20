import { LitElement, css, html } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import { state } from 'lit/decorators.js';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import "/src/index.css"
import "/src/surveys/juridicastyle.css"
export class SurveyJuridica extends LitElement {
  static properties = {
    authorized: { type: String },
    age: { type: String },
    culture: { type: String },
    education: { type: String },
    noSabeEducation: { type: Boolean },
    timeInMunicipality: { type: String },
    zone: { type: String },
    selfIdentification: { type: Array },
    sex: { type: String },
    culturalBarriers: { type: String },
    specificCulturalBarriers: { type: Array },
    otherCulturalBarrierText: { type: String },
    genderBarriers: { type: String },
    specificGenderBarriers: { type: Array },
    otherGenderBarrierText: { type: String },
    securityBarriers: { type: String },
    specificSecurityBarriers: { type: Array },
    otherSecurityBarrierText: { type: String },
    disabilityBarriers: { type: String },
    specificDisabilityBarriers: { type: Array },
    otherDisabilityBarrierText: { type: String },
    economicBarriers: { type: String },
    specificEconomicBarriers: { type: Array },
    otherEconomicBarrierText: { type: String },
    geographicBarriers: { type: String },
    specificGeographicBarriers: { type: Array },
    otherGeographicBarrierText: { type: String },
    institutionalBarriers: { type: String },
    specificInstitutionalBarriers: { type: Array },
    otherInstitutionalBarrierText: { type: String },
    technologicalBarriers: { type: String },
    specificTechnologicalBarriers: { type: Array },
    otherTechnologicalBarrierText: { type: String },
    familyProblems: { type: String },
    consumerProblems: { type: String },
    publicServiceProblems: { type: String },
    employmentProblems: { type: String },
    debtProblems: { type: String },
    housingProblems: { type: String },
    publicSpaceProblems: { type: String },
    landPropertyProblems: { type: String },
    environmentalProblems: { type: String },
    healthServiceProblems: { type: String },
    stateRelationProblems: { type: String },
    educationProblems: { type: String },
    crimeRelatedProblems: { type: String },
    armedConflictProblems: { type: String },
    selectedProblemCategory: { type: String },
    specificProblemType: { type: String },
    actionTaken: { type: String },
    actionTakenOther: { type: String },
    institutionInvolved: { type: String },
    informationReceived: { type: String },
    affectationLevel: { type: String },
    totalCost: { type: Number },
    problemResolved: { type: String },
    specificProblemType: { type: String },
    problemEntries: { type: Array },
  };



  constructor() {
    super();
    this.authorized = null;
    this.age = null;
    this.culture = null;
    this.education = null;
    this.noSabeEducation = false;
    this.timeInMunicipality = null;
    this.zone = null;
    this.selfIdentification = [];
    this.sex = null;
    this.culturalBarriers = null;
    this.specificCulturalBarriers = [];
    this.otherCulturalBarrierText = '';
    this.genderBarriers = null;
    this.specificGenderBarriers = [];
    this.otherGenderBarrierText = '';
    this.securityBarriers = null;
    this.specificSecurityBarriers = [];
    this.otherSecurityBarrierText = '';
    this.disabilityBarriers = null;
    this.specificDisabilityBarriers = [];
    this.otherDisabilityBarrierText = '';
    this.economicBarriers = null;
    this.specificEconomicBarriers = [];
    this.otherEconomicBarrierText = '';
    this.geographicBarriers = null;
    this.specificGeographicBarriers = [];
    this.otherGeographicBarrierText = '';
    this.institutionalBarriers = null;
    this.specificInstitutionalBarriers = [];
    this.otherInstitutionalBarrierText = '';
    this.technologicalBarriers = null;
    this.specificTechnologicalBarriers = [];
    this.otherTechnologicalBarrierText = '';
    this.familyProblems = null;
    this.consumerProblems = null;
    this.publicServiceProblems = null;
    this.employmentProblems = null;
    this.debtProblems = null;
    this.housingProblems = null;
    this.publicSpaceProblems = null;
    this.landPropertyProblems = null;
    this.environmentalProblems = null;
    this.healthServiceProblems = null;
    this.stateRelationProblems = null;
    this.educationProblems = null;
    this.crimeRelatedProblems = null;
    this.armedConflictProblems = null;
    this.selectedProblemCategory = null;
    this.specificProblemType = '';
    this.actionTaken = '';
    this.actionTakenOther = '';
    this.institutionInvolved = '';
    this.informationReceived = '';
    this.affectationLevel = '';
    this.totalCost = 0;
    this.problemResolved = null;
    this.selectedProblemCategory = null;
    this.specificProblemType = '';
    this.problemEntries = [];
    
  }
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
            <div class="container">
                <header>
                    <h1>ENCUESTA SOBRE NECESIDADES JURÍDICAS</h1>
                    <p>Versión 4.0 - 23 de mayo de 2024</p>
                    <p><strong>APROBADA</strong></p>
                </header>
                <div class="container">
                <h2>Instrucciones generales para el o la encuestador(a)</h2>
                <ul>
                    <li>Las instrucciones que estén en letra cursiva son para el encuestador, NO se deben leer al entrevistado.</li>
                    <li>Si se imprime el cuestionario, se debe utilizar hojas tamaño oficio, verificando que los cortes de página sean iguales al formato original.</li>
                    <li>Antes de aplicar el cuestionario es necesario leer todas las instrucciones que se encuentran en el instructivo de diligenciamiento.</li>
                    <li>Las siglas RU significa respuesta única y RM significa respuesta múltiple.</li>
                </ul>
                </div>
                <div>
                        <p class="text-sm">
                        El Ministerio de Justicia y del Derecho viene adelantando, la asistencia técnica para promover la implementación y operación de la
                        estrategia Sistemas Locales de Justicia a nivel municipal. El objetivo de esta encuesta es contribuir a la lectura del territorio a través
                        de la identificación de las barreras de acceso a la justicia y las conflictividades.
                        </p>
                        <p class="text-sm">
                        Por lo anterior, solicitamos su valiosa colaboración contestando la siguiente encuesta. La información que usted nos suministre será
                        utilizada únicamente con fines estadísticos y sus resultados se mostrarán de manera agregada en el documento denominado:
                        "Lectura territorial y diagnóstico de conflictividades", e insumo fundamental para la construcción del Plan estratégico del Sistema
                        Local de Justicia del municipio.
                        </p>
                        <p class="text-sm"><strong>Agradecemos de antemano su colaboración.</strong></p>
                </div>
                <div class="container">
                    <h2>Capítulo 1. Características sociodemográficas del encuestado</h2>
                    <p class="text-sm italic text-orange">El objetivo de este capítulo es obtener información sobre los aspectos sociodemográficos del ciudadano</p>
                </div> 
                <div class="row g-3">
                <div class="form-group">
                <label for="nombre">P1. Nombre completo del encuestado:</label>
                <input class="form-control" type="text" id="nombre" name="nombre">
              </div>
  
              <div class="form-group">
                <label for="celular">P2. Número de celular:</label>
                <input class="form-control" type="text" id="celular" name="celular">
              </div>
  
              <div class="form-group">
                <label for="departamento">P3. Nombre departamento:</label>
                <input class="form-control" type="text" id="departamento" name="departamento">
              </div>
  
              <div class="form-group">
                <label for="codigo-departamento">P4. Código departamento:</label>
                <input class="form-control" type="text" id="codigo-departamento" name="codigo-departamento" class="short-input">
              </div>
  
              <div class="form-group">
                <label for="municipio">P5. Nombre municipio:</label>
                <input class="form-control" type="text" id="municipio" name="municipio">
              </div>
  
              <div class="form-group">
                <label for="codigo-municipio">P6. Código municipio:</label>
                <input class="form-control" type="text" id="codigo-municipio" name="codigo-municipio" class="short-input">
              </div>
  
              <div class="form-group">
                <label>P7. ¿Nos autoriza a realizarle la encuesta?</label>
                <div class="radio-group">
                  <label class="radio-option">
                    <input type="radio" name="autorizacion" value="si" @change=${this.handleAuthorization}>
                    Sí
                    <span class="text-sm" style="color: #2563eb; margin-left: 1rem;">Pase a la pregunta P8</span>
                  </label>
                  <label class="radio-option">
                    <input type="radio" name="autorizacion" value="no" @change=${this.handleAuthorization}>
                    No
                    <span class="text-sm" style="color: #2563eb; margin-left: 1rem;">Agradezca y finalice la encuesta. Colocar la novedad en A5.</span>
                  </label>
                </div>
              </div>
  
              ${this.authorized === 'si' ? html`
                <div class="form-group">
                  <label>P8. ¿Cuál es su edad?</label>
                  <p class="text-sm italic" style="color: #6b7280;">(ENCUESTADOR: LEA LAS OPCIONES Y ESPERAR RESPUESTA DEL ENCUESTADO – RU – MARCAR CON "X")</p>
                  <div class="radio-group">
                    ${['Entre 18 a 25 años', 'Entre 26 a 35 años', 'Entre 36 a 45 años', 'Entre 46 a 55 años', 'Mayor de 56 años'].map((option, index) => html`
                      <label class="radio-option">
                        <input type="radio" name="edad" value=${index + 1} @change=${this.handleAgeSelection}>
                        ${option}
                      </label>
                    `)}
                  </div>
                </div>
              ` : ''}
              ${this.authorized === 'si' ? html`
                <div class="form-group">
                <div class="form-group">
                <label>P9. ¿De acuerdo con su cultura, pueblo o rasgos físicos... usted se reconoce como:</label>
                <p class="text-sm italic" style="color: #6b7280;">(ENCUESTADOR: LEA LAS OPCIONES Y ESPERAR RESPUESTA DEL ENCUESTADO – RU – MARCAR CON "X")</p>
                <div class="radio-group">
                  <label class="radio-option">
                    <input type="radio" name="cultura" value="9.4.1" @change=${this.handleCultureSelection}>
                    Indígena
                  </label>
                  <label class="radio-option">
                    <input type="radio" name="cultura" value="9.4.2" @change=${this.handleCultureSelection}>
                    Gitano / ROM
                  </label>
                  <label class="radio-option">
                    <input type="radio" name="cultura" value="9.4.3" @change=${this.handleCultureSelection}>
                    Raizal del archipiélago de San Andrés y Providencia
                  </label>
                  <label class="radio-option">
                    <input type="radio" name="cultura" value="9.4.4" @change=${this.handleCultureSelection}>
                    Palenquero de San Basilio
                  </label>
                  <label class="radio-option">
                    <input type="radio" name="cultura" value="9.4.5" @change=${this.handleCultureSelection}>
                    Negro, mulato, afrodescendiente o afrocolombiano
                  </label>
                  <label class="radio-option">
                    <input type="radio" name="cultura" value="9.4.6" @change=${this.handleCultureSelection}>
                    Ninguno de los anteriores
                  </label>
                </div>
              </div>
                </div>
              ` : ''}
                </div>

                ${this.authorized === 'si' ? html`
                    <div class="form-group">
                        <label>P9. ¿De acuerdo con su cultura, pueblo o rasgos físicos... usted se reconoce como:</label>
                        <p class="text-sm italic" style="color: #6b7280;">(ENCUESTADOR: LEA LAS OPCIONES Y ESPERAR RESPUESTA DEL ENCUESTADO – RU – MARCAR CON "X")</p>
                        <div class="radio-group">
                            <label class="radio-option">
                                <input type="radio" name="cultura" value="9.4.1" @change=${this.handleCultureSelection}>
                                Indígena
                            </label>
                            <label class="radio-option">
                                <input type="radio" name="cultura" value="9.4.2" @change=${this.handleCultureSelection}>
                                Gitano / ROM
                            </label>
                            <label class="radio-option">
                                <input type="radio" name="cultura" value="9.4.3" @change=${this.handleCultureSelection}>
                                Raizal del archipiélago de San Andrés y Providencia
                            </label>
                            <label class="radio-option">
                                <input type="radio" name="cultura" value="9.4.4" @change=${this.handleCultureSelection}>
                                Palenquero de San Basilio
                            </label>
                            <label class="radio-option">
                                <input type="radio" name="cultura" value="9.4.5" @change=${this.handleCultureSelection}>
                                Negro, mulato, afrodescendiente o afrocolombiano
                            </label>
                            <label class="radio-option">
                                <input type="radio" name="cultura" value="9.4.6" @change=${this.handleCultureSelection}>
                                Ninguno de los anteriores
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                    <label>P10. ¿Cuál es su nivel educativo más alto alcanzado?</label>
                    <p class="text-sm italic" style="color: #6b7280;">(ENCUESTADOR: LEA LAS OPCIONES Y ESPERAR RESPUESTA DEL ENCUESTADO – RU – MARCAR CON "X")</p>
                    <table class="education-table">
                      <tbody>
                        ${[
          [
            { value: '10.4.1', label: 'Ninguno' },
            { value: '10.4.2', label: 'Preescolar' },
          ],
          [
            { value: '10.4.3', label: 'Básica primaria (1-5)' },
            { value: '10.4.4', label: 'Básica secundaria (6-9)' },
          ],
          [
            { value: '10.4.5', label: 'Media (10-13)' },
            { value: '10.4.6', label: 'Técnico' },
          ],
          [
            { value: '10.4.7', label: 'Tecnólogo' },
            { value: '10.4.8', label: 'Profesional' },
          ],
          [
            { value: '10.4.9', label: 'Especialista' },
            { value: '10.4.10', label: 'Magister' },
          ],
          [
            { value: '10.4.11', label: 'Doctorado' },
            { value: '10.4.12', label: 'No sabe / No informa' },
          ],
        ].map(row => html`
                          <tr>
                            ${row.map(option => html`
                              <td>
                                <label class="checkbox-option">
                                  <input type="checkbox" name="educacion" value=${option.value} 
                                         @change=${option.value === '10.4.1' ? this.handleNoSabeEducation : this.handleEducationSelection}
                                         .checked=${this.education === option.value}
                                         ?disabled=${this.noSabeEducation && option.value !== '10.4.1'}>
                                  ${option.label}
                                </label>
                              </td>
                            `)}
                          </tr>
                        `)}
                      </tbody>
                    </table>
                  </div>

                <div class="form-group">
                    <label>P11. ¿Cuánto tiempo lleva... viviendo en el municipio de .........?</label>
                    <div class="radio-group">
                        ${[
          { label: 'Menos de 1 año', value: '11.4.1' },
          { label: 'Entre 1 y menos de 5 años', value: '11.4.2' },
          { label: 'Entre 5 y menos de 10 años', value: '11.4.3' },
          { label: '10 años y más', value: '11.4.4' }
        ].map(option => html`
                        <label class="radio-option">
                            <input type="radio" name="timeInMunicipality" value=${option.value} @change=${this.handleTimeInMunicipalitySelection}>
                            ${option.label}
                        </label>
                        `)}
                    </div>
                </div>
                <div class="form-group">
              <label>P12. ¿Actualmente en qué zona del municipio vive?</label>
              <p class="text-sm italic" style="color: #6b7280;">(ENCUESTADOR: LEA LAS OPCIONES Y ESPERAR RESPUESTA DEL ENCUESTADO – RU – MARCAR CON "X")</p>
              <div class="radio-group">
                ${[
          { label: 'Urbana', value: '12.4.1' },
          { label: 'Rural', value: '12.4.2' }
        ].map(option => html`
                  <label class="radio-option">
                    <input type="radio" name="zone" value=${option.value} @change=${this.handleZoneSelection}>
                    ${option.label}
                  </label>
                `)}
              </div>
            </div>

            <div class="form-group">
              <label>P13. ¿Usted se reconoce como:</label>
              <p class="text-sm italic" style="color: #6b7280;">(ENCUESTADOR: LEA LAS OPCIONES Y ESPERAR RESPUESTA DEL ENCUESTADO – RM – MARCAR CON "X")</p>
              <div class="checkbox-group">
                ${[
          { label: 'Campesino - campesina', value: '13.4.1' },
          { label: 'Miembro de la comunidad LGTBIQ+', value: '13.4.2' },
          { label: 'Migrante', value: '13.4.3' }
        ].map(option => html`
                  <label class="radio-option">
                    <input type="radio" name="selfIdentification" value=${option.value} @change=${this.handleSelfIdentificationSelection}>
                    ${option.label}
                  </label>
                `)}
              </div>
            </div>

            <div class="form-group">
              <label>P14. Sexo:</label>
              <p class="text-sm italic" style="color: #6b7280;">(ENCUESTADOR: LEA LAS OPCIONES Y ESPERAR RESPUESTA DEL ENCUESTADO – RU – MARCAR CON "X")</p>
              <div class="radio-group">
                ${[
          { label: 'Hombre', value: '14.4.1' },
          { label: 'Mujer', value: '14.4.2' }
        ].map(option => html`
                  <label class="radio-option">
                    <input type="radio" name="sex" value=${option.value} @change=${this.handleSexSelection}>
                    ${option.label}
                  </label>
                `)}
              </div>
            </div>

            <div class="chapter-title">Capítulo 2. Barreras de acceso a la justicia</div>
            <p class="chapter-description">El objetivo de este capítulo es la identificación de las barreras de acceso a la justicia en el territorio.</p>

            <div class="form-group">
            <label>P15. Del siguiente listado, ¿Cuáles considera usted que son las principales barreras de acceso a la justicia que se presentan en este municipio?</label>
            
            <div class="question-definition">
              <strong>1. Culturales y lingüísticas</strong><br>
              <span class="text-sm">Definición: Obstáculos o dificultades para la satisfacción de necesidades jurídicas en razón de la pertenencia a grupos culturales o lingüísticos minoritarios.</span>
            </div>
            <div class="radio-group">
              <label class="radio-option">
                <input type="radio" name="culturalBarriers" value="15.4.1.1" @change=${this.handleCulturalBarriersSelection}>
                Sí
              </label>
              <label class="radio-option">
                <input type="radio" name="culturalBarriers" value="15.4.1.2" @change=${this.handleCulturalBarriersSelection}>
                No
              </label>
            </div>
            <p class="text-sm italic">(Si la respuesta es Sí, profundizar con la P16.1.1 y siguientes, de lo contrario pase a P15.2)</p>
          </div>

          ${this.culturalBarriers === '15.4.1.1' ? html`
            <div class="form-group">
              <label>P16. ¿Cuáles de las siguientes subcategorías de barreras de acceso a la justicia se presentan en el municipio?</label>
              <p class="text-sm italic">Marcar con X</p>
              <div class="checkbox-group">
                ${[
            { value: '16.4.1.1', label: 'Atención inadecuada por razón de la condición cultural o lingüística.' },
            { value: '16.4.1.2', label: 'Falta de información, rutas de atención y asistencia legal de fácil comprensión o disponible en lenguas minoritarias.' },
            { value: '16.4.1.3', label: 'Falta de articulación y coordinación entre la justicia propia afro y la jurisdicción ordinaria.' },
            { value: '16.4.1.4', label: 'Falta de articulación y coordinación entre la Justicia Especial Indígena y la jurisdicción ordinaria.' },
            { value: '16.4.1.5', label: 'Falta de asistencia de traductores o intérpretes dentro de los procedimientos o trámites legales.' },
            { value: '16.4.1.6', label: 'Otro, ¿Cuál?' }
          ].map(option => html`
                  <label class="checkbox-option">
                    <input type="checkbox" name="specificCulturalBarriers" value=${option.value} @change=${this.handleSpecificCulturalBarriersSelection}>
                    ${option.label}
                  </label>
                  ${option.value === '16.4.1.6' && this.specificCulturalBarriers.includes('16.4.1.6') ? html`
                    <div class="other-input">
                      <input type="text" placeholder="Especifique otra barrera" .value=${this.otherCulturalBarrierText} @input=${this.handleOtherCulturalBarrierInput}>
                    </div>
                  ` : ''}
                `)}
              </div>
            </div>
          ` : ''}

                  <div class="form-group">
                    <div class="question-definition">
                      <strong>2. De Género</strong><br>
                      <span class="text-sm">Definición: Obstáculos o dificultades para la satisfacción de necesidades jurídicas, en razón del sexo, la identidad de género, orientación sexual o expresión de género.</span>
                    </div>
                    <div class="radio-group">
                      <label class="radio-option">
                        <input type="radio" name="genderBarriers" value="15.4.2.1" @change=${this.handleGenderBarriersSelection}>
                        Sí
                      </label>
                      <label class="radio-option">
                        <input type="radio" name="genderBarriers" value="15.4.2.2" @change=${this.handleGenderBarriersSelection}>
                        No
                      </label>
                    </div>
                    <p class="text-sm italic">(Si la respuesta es Sí, profundizar con la P16.2.1 y siguientes, de lo contrario pase a P15.3)</p>
                  </div>

                  ${this.genderBarriers === '15.4.2.1' ? html`
                    <div class="form-group">
                      <label>P16. ¿Cuáles de las siguientes subcategorías de barreras de acceso a la justicia se presentan en el municipio?</label>
                      <p class="text-sm italic">Marcar con X</p>
                      <div class="checkbox-group">
                        ${[
            { value: '16.4.2.1', label: 'Falta de atención o atención inadecuada o desestimación de los conflictos en razón del sexo, identidad de género, orientación sexual o expresión de género.' },
            { value: '16.4.2.2', label: 'Falta de asistencia o representación legal adecuada por razón del sexo, identidad de género, orientación sexual o expresión de género.' },
            { value: '16.4.2.3', label: 'No accede a los servicios de justicia por sentir o presumir que será discriminado en razón de su sexo, identidad de género, orientación sexual o expresión de género.' },
            { value: '16.4.2.4', label: 'Miedo a denunciar o a continuar con los trámites y procedimientos en razón a amenazas o violencias basadas en género.' },
            { value: '16.4.2.5', label: 'Otro, ¿Cuál?' }
          ].map(option => html`
                          <label class="checkbox-option">
                            <input type="checkbox" name="specificGenderBarriers" value=${option.value} @change=${this.handleSpecificGenderBarriersSelection}>
                            ${option.label}
                          </label>
                          ${option.value === '16.4.2.5' && this.specificGenderBarriers.includes('16.4.2.5') ? html`
                            <div class="other-input">
                              <input type="text" placeholder="Especifique otra barrera" .value=${this.otherGenderBarrierText} @input=${this.handleOtherGenderBarrierInput}>
                            </div>
                          ` : ''}
                        `)}
                      </div>
                    </div>
                  ` : ''}
                    <!-- New security barriers section -->
                  <div class="form-group">
                      <div class="question-definition">
                          <strong>3. De seguridad, orden público o asociadas al conflicto armado</strong><br>
                          <span class="text-sm">Definición: Obstáculos o dificultades para la satisfacción de una necesidad jurídica debido a la percepción de peligro frente la vida o la integridad personal.</span>
                        </div>
                        <div class="radio-group">
                          <label class="radio-option">
                            <input type="radio" name="securityBarriers" value="15.4.3.1" @change=${this.handleSecurityBarriersSelection}>
                            Sí
                          </label>
                          <label class="radio-option">
                            <input type="radio" name="securityBarriers" value="15.4.3.2" @change=${this.handleSecurityBarriersSelection}>
                            No
                          </label>
                      </div>
                      <p class="text-sm italic">(Si la respuesta es Sí, profundizar con la P16.3.1 y siguientes, de lo contrario pase a P15.4)</p>
                  </div>
                    ${this.securityBarriers === '15.4.3.1' ? html`
                      <div class="form-group">
                        <label>P16. ¿Cuáles de las siguientes subcategorías de barreras de acceso a la justicia se presentan en el municipio?</label>
                        <p class="text-sm italic">Marcar con X</p>
                        <div class="checkbox-group">
                          ${[
            { value: '16.4.3.1', label: 'Miedo a denunciar o a continuar con los trámites por amenazas o control territorial de grupos armados.' },
            { value: '16.4.3.2', label: 'Justicias paralelas' },
            { value: '16.4.3.3', label: 'Afectación en la prestación de servicios de justicia por violencia contra operadores (p. ej. Cierre de oficinas, traslados de despachos, entre otros).' },
            { value: '16.4.3.4', label: 'Otro, ¿Cuál?' }
          ].map(option => html`
                            <label class="checkbox-option">
                              <input type="checkbox" name="specificSecurityBarriers" value=${option.value} @change=${this.handleSpecificSecurityBarriersSelection}>
                              ${option.label}
                            </label>
                            ${option.value === '16.4.3.4' && this.specificSecurityBarriers.includes('16.4.3.4') ? html`
                              <div class="other-input">
                                <input type="text" placeholder="Especifique otra barrera" .value=${this.otherSecurityBarrierText} @input=${this.handleOtherSecurityBarrierInput}>
                              </div>
                            ` : ''}
                          `)}
                        </div>
                      </div>
                    ` : ''}
                    <!-- New Disability barriers section -->
                    <div class="form-group">
                    <div class="question-definition">
                      <strong>4. Discapacidad</strong><br>
                      <span class="text-sm">Definición: Obstáculos o dificultades para la satisfacción de necesidades jurídicas en razón de la condición de discapacidad de las personas.</span>
                    </div>
                    <div class="radio-group">
                      <label class="radio-option">
                        <input type="radio" name="disabilityBarriers" value="15.4.4.1" @change=${this.handleDisabilityBarriersSelection}>
                        Sí
                      </label>
                      <label class="radio-option">
                        <input type="radio" name="disabilityBarriers" value="15.4.4.2" @change=${this.handleDisabilityBarriersSelection}>
                        No
                      </label>
                    </div>
                    <p class="text-sm italic">(Si la respuesta es Sí, profundizar con la P16.4.1 y siguientes, de lo contrario pase a P15.5)</p>
                  </div>

                    ${this.disabilityBarriers === '15.4.4.1' ? html`
                      <div class="form-group">
                        <label>P16. ¿Cuáles de las siguientes subcategorías de barreras de acceso a la justicia se presentan en el municipio?</label>
                        <p class="text-sm italic">Marcar con X</p>
                        <div class="checkbox-group">
                          ${[
            { value: '16.4.4.1', label: 'Falta de medios de transporte adecuados para movilizarse hasta donde se prestan los servicios de justicia (Vehículos accesibles, sillas de ruedas, entre otros).' },
            { value: '16.4.4.2', label: 'Falta de intérpretes o de asistencia adecuada (para personas con dificultades para ver o escuchar).' },
            { value: '16.4.4.3', label: 'Falta de edificaciones o infraestructura accesible para personas con discapacidad (ausencia de rampas, pasillos estrechos, entre otros).' },
            { value: '16.4.4.4', label: 'Otro, ¿Cuál?' }
          ].map(option => html`
                            <label class="checkbox-option">
                              <input type="checkbox" name="specificDisabilityBarriers" value=${option.value} @change=${this.handleSpecificDisabilityBarriersSelection}>
                              ${option.label}
                            </label>
                            ${option.value === '16.4.4.4' && this.specificDisabilityBarriers.includes('16.4.4.4') ? html`
                              <div class="other-input">
                                <input type="text" placeholder="Especifique otra barrera" .value=${this.otherDisabilityBarrierText} @input=${this.handleOtherDisabilityBarrierInput}>
                              </div>
                            ` : ''}
                          `)}
                        </div>
                      </div>
                    ` : ''}

                    <!-- New Economic barriers section -->
                    <div class="form-group">
                      <div class="question-definition">
                        <strong>5. Económicas</strong><br>
                        <span class="text-sm">Definición: Se refiere a las dificultades de las personas para asumir los costos que implica el acceso a los servicios de justicia o los obstáculos que enfrentan al encontrarse en situación de marginalidad económica.</span>
                      </div>
                      <div class="radio-group">
                        <label class="radio-option">
                          <input type="radio" name="economicBarriers" value="15.4.5.1" @change=${this.handleEconomicBarriersSelection}>
                          Sí
                        </label>
                        <label class="radio-option">
                          <input type="radio" name="economicBarriers" value="15.4.5.2" @change=${this.handleEconomicBarriersSelection}>
                          No
                        </label>
                      </div>
                      <p class="text-sm italic">(Si la respuesta es Sí, profundizar con la P16.5.1 y siguientes, de lo contrario pase a P15.6)</p>
                    </div>

                    ${this.economicBarriers === '15.4.5.1' ? html`
                      <div class="form-group">
                        <label>P16. ¿Cuáles de las siguientes subcategorías de barreras de acceso a la justicia se presentan en el municipio?</label>
                        <p class="text-sm italic">Marcar con X</p>
                        <div class="checkbox-group">
                          ${[
            { value: '16.4.5.1', label: 'Falta de recursos para contratar un abogado.' },
            { value: '16.4.5.2', label: 'Falta de abogados o defensores de oficio en el lugar.' },
            { value: '16.4.5.3', label: 'Falta de recursos para trasladarse al lugar donde se prestan servicios de justicia.' },
            { value: '16.4.5.4', label: 'Falta de recursos para la conectividad.' },
            { value: '16.4.5.5', label: 'Falta de recursos para la atención de gastos procesales y pre procesales (p. ej. dictámenes periciales, transporte de testigos o contacto con los mismos, investigadores, entre otros).' },
            { value: '16.4.5.6', label: 'Altos costos de oportunidad (tiempo que toma y se destinará) para atender el trámite, proceso o procedimiento.' },
            { value: '16.4.5.7', label: 'Otro, ¿Cuál?' }
          ].map(option => html`
                            <label class="checkbox-option">
                              <input type="checkbox" name="specificEconomicBarriers" value=${option.value} @change=${this.handleSpecificEconomicBarriersSelection}>
                              ${option.label}
                            </label>
                            ${option.value === '16.4.5.7' && this.specificEconomicBarriers.includes('16.4.5.7') ? html`
                              <div class="other-input">
                                <input type="text" placeholder="Especifique otra barrera" .value=${this.otherEconomicBarrierText} @input=${this.handleOtherEconomicBarrierInput}>
                              </div>
                            ` : ''}
                          `)}
                        </div>
                      </div>
                    ` : ''}
                      <!-- New Geographic barriers section -->
                      <div class="form-group">
                      <div class="question-definition">
                        <strong>6. Geográficas</strong><br>
                        <span class="text-sm">Definición: Obstáculos o dificultades para la satisfacción de necesidades jurídicas en razón de la ubicación geográfica, las distancias, medios y vías de comunicación o transporte.</span>
                      </div>
                      <div class="radio-group">
                        <label class="radio-option">
                          <input type="radio" name="geographicBarriers" value="15.4.6.1" @change=${this.handleGeographicBarriersSelection}>
                          Sí
                        </label>
                        <label class="radio-option">
                          <input type="radio" name="geographicBarriers" value="15.4.6.2" @change=${this.handleGeographicBarriersSelection}>
                          No
                        </label>
                      </div>
                      <p class="text-sm italic">(Si la respuesta es Sí, profundizar con la P16.6.1 y siguientes, de lo contrario pase a P15.7)</p>
                      </div>

                      ${this.geographicBarriers === '15.4.6.1' ? html`
                      <div class="form-group">
                        <label>P16. ¿Cuáles de las siguientes subcategorías de barreras de acceso a la justicia se presentan en el municipio?</label>
                        <p class="text-sm italic">Marcar con X</p>
                        <div class="checkbox-group">
                          ${[
            { value: '16.4.6.1', label: 'Falta de presencia de operadores de justicia en zonas rurales.' },
            { value: '16.4.6.2', label: 'Falta de infraestructura vial o de oferta de transporte para movilizarse a donde se prestan servicios de justicia.' },
            { value: '16.4.6.3', label: 'Dificultades para acceder a los operadores de justicia en razón de la distancia que debe recorrerse o de las condiciones geográficas (p. ej. accidentes geográficos).' },
            { value: '16.4.6.4', label: 'Otro, ¿Cuál?' }
          ].map(option => html`
                            <label class="checkbox-option">
                              <input type="checkbox" name="specificGeographicBarriers" value=${option.value} @change=${this.handleSpecificGeographicBarriersSelection}>
                              ${option.label}
                            </label>
                            ${option.value === '16.4.6.4' && this.specificGeographicBarriers.includes('16.4.6.4') ? html`
                              <div class="other-input">
                                <input type="text" placeholder="Especifique otra barrera" .value=${this.otherGeographicBarrierText} @input=${this.handleOtherGeographicBarrierInput}>
                              </div>
                            ` : ''}
                          `)}
                        </div>
                      </div>
                      ` : ''}
                      <!-- New Institutional barriers section -->
                      <div class="form-group">
                      <div class="question-definition">
                        <strong>7. Institucionales</strong><br>
                        <span class="text-sm">Definición: Se refieren a dificultades en el acceso en razón a la estructura, políticas, procesos y dinámicas de los sistemas de justicia.</span>
                      </div>
                      <div class="radio-group">
                        <label class="radio-option">
                          <input type="radio" name="institutionalBarriers" value="15.4.7.1" @change=${this.handleInstitutionalBarriersSelection}>
                          Sí
                        </label>
                        <label class="radio-option">
                          <input type="radio" name="institutionalBarriers" value="15.4.7.2" @change=${this.handleInstitutionalBarriersSelection}>
                          No
                        </label>
                      </div>
                      <p class="text-sm italic">(Si la respuesta es Sí, profundizar con la P16.7.1 y siguientes, de lo contrario pase a P15.8)</p>
                      </div>

                      ${this.institutionalBarriers === '15.4.7.1' ? html`
                      <div class="form-group">
                        <label>P16. ¿Cuáles de las siguientes subcategorías de barreras de acceso a la justicia se presentan en el municipio?</label>
                        <p class="text-sm italic">Marcar con X</p>
                        <div class="checkbox-group">
                          ${[
            { value: '16.4.7.1', label: 'Lentitud y larga duración de los trámites y procesos de los servicios de justicia.' },
            { value: '16.4.7.2', label: 'Incumplimiento de acuerdos o sentencias.' },
            { value: '16.4.7.3', label: 'Excesivos trámites y formalidades, procesos demasiado complejos.' },
            { value: '16.4.7.4', label: 'Desconfianza en los operadores de justicia y en la institucionalidad en general.' },
            { value: '16.4.7.5', label: 'Percepción de impunidad en el sistema de justicia.' },
            { value: '16.4.7.6', label: 'Falta de implementación o promoción de los Métodos de Resolución de Conflictos.' },
            { value: '16.4.7.7', label: 'Falta de articulación y coordinación entre actores y operadores de justicia.' },
            { value: '16.4.7.8', label: 'Desconocimiento de derechos, deberes y de los diversos mecanismos de acceso a la justicia.' },
            { value: '16.4.7.9', label: 'Alta rotación de servidores en el sector justicia.' },
            { value: '16.4.7.10', label: 'Falta de conocimientos o competencias de los actores y operadores de justicia.' },
            { value: '16.4.7.11', label: 'Falta de recursos financieros, físicos y humanos para atender de forma oportuna y suficiente las necesidades jurídicas.' },
            { value: '16.4.7.12', label: 'Otro, ¿Cuál?' }
          ].map(option => html`
                            <label class="checkbox-option">
                              <input type="checkbox" name="specificInstitutionalBarriers" value=${option.value} @change=${this.handleSpecificInstitutionalBarriersSelection}>
                              ${option.label}
                            </label>
                            ${option.value === '16.4.7.12' && this.specificInstitutionalBarriers.includes('16.4.7.12') ? html`
                              <div class="other-input">
                                <input type="text" placeholder="Especifique otra barrera" .value=${this.otherInstitutionalBarrierText} @input=${this.handleOtherInstitutionalBarrierInput}>
                              </div>
                            ` : ''}
                          `)}
                        </div>
                      </div>
                      ` : ''}
                      <!-- New Technological barriers section -->
                      <div class="form-group">
                      <div class="question-definition">
                        <strong>8. Tecnológicas</strong><br>
                        <span class="text-sm">Definición: Dificultades en el acceso a la justicia por la falta de equipos, sistemas tecnológicos, redes o infraestructura de conectividad.</span>
                      </div>
                      <div class="radio-group">
                        <label class="radio-option">
                          <input type="radio" name="technologicalBarriers" value="15.4.8.1" @change=${this.handleTechnologicalBarriersSelection}>
                          Sí
                        </label>
                        <label class="radio-option">
                          <input type="radio" name="technologicalBarriers" value="15.4.8.2" @change=${this.handleTechnologicalBarriersSelection}>
                          No
                        </label>
                      </div>
                      <p class="text-sm italic">(Si la respuesta es Sí, profundizar con la P16.8.1 y siguientes, de lo contrario pase a P17)</p>
                      </div>

                      ${this.technologicalBarriers === '15.4.8.1' ? html`
                      <div class="form-group">
                        <label>P16. ¿Cuáles de las siguientes subcategorías de barreras de acceso a la justicia se presentan en el municipio?</label>
                        <p class="text-sm italic">Marcar con X</p>
                        <div class="checkbox-group">
                          ${[
            { value: '16.4.8.1', label: '8.1 Falta de equipos o infraestructura tecnológica a disposición de los actores y operadores de justicia.' },
            { value: '16.4.8.2', label: '8.2 Las personas no cuentan con equipos o sistemas que les permitan acceder en línea a los servicios de justicia.' },
            { value: '16.4.8.3', label: '8.3 Deficiente conectividad en zonas rurales (veredas o corregimientos).' },
            { value: '16.4.8.4', label: '8.4 Deficiente conectividad en el casco urbano de los municipios o distritos.' },
            { value: '16.4.8.5', label: '8.5 Otro, ¿Cuál?' }
          ].map(option => html`
                            <label class="checkbox-option">
                              <input type="checkbox" name="specificTechnologicalBarriers" value=${option.value} @change=${this.handleSpecificTechnologicalBarriersSelection}>
                              ${option.label}
                            </label>
                            ${option.value === '16.4.8.5' && this.specificTechnologicalBarriers.includes('16.4.8.5') ? html`
                              <div class="other-input">
                                <input type="text" placeholder="Especifique otra barrera" .value=${this.otherTechnologicalBarrierText} @input=${this.handleOtherTechnologicalBarrierInput}>
                              </div>
                            ` : ''}
                          `)}
                        </div>
                      </div>
                      ` : ''}
                      <div class="chapter-title">Capítulo 3. Problemas / desacuerdos / conflictos y disputas</div>
                      <div class="form-group">
                        <label>
                          P17. Del siguiente listado de problemas / desacuerdos / conflictos y disputas ¿Para cada caso puede decirme si usted ha experimentado personalmente alguno de esos problemas entre enero 2020 hasta junio de 2024? Por favor solo incluya los problemas que experimentó usted mismo, no los que le ocurrieron a sus familiares, a sus amigos, a su negocio, o a su empleador, ni las situaciones en las que usted representó o ayudó a alguien con un problema. Y por favor solo mencione los problemas una vez:
                        </label>
                        <p class="text-sm italic">(ENCUESTADOR: ENTREGUE TARJETA 1 AL ENCUESTADO Y ESPERAR RESPUESTA EN CADA CASO – MARCAR CON "X")</p>
          
                        <div class="problem-category">
                          <p>1. Problemas relacionados con familiares como separación o divorcio, cuotas de alimentos, herencias o sucesiones, paternidad / maternidad, cuidado de personas que más lo requieren y gastos del hogar.</p>
                          <div class="radio-group">
                            <label class="radio-option">
                              <input type="radio" name="familyProblems" value="17.4.1.1" @change=${this.handleFamilyProblemsSelection}>
                              Sí
                            </label>
                            <label class="radio-option">
                              <input type="radio" name="familyProblems" value="17.4.1.2" @change=${this.handleFamilyProblemsSelection}>
                              No
                            </label>
                          </div>
                        </div>
          
                        <div class="problem-category">
                          <p>2. Problemas relacionados con el consumo de un producto, bien o servicio (telefonía celular, televisión por cable, internet, transporte, alimentos, electrodomésticos y servicios técnicos o profesionales). Se excluyen los servicios públicos domiciliarios.</p>
                          <div class="radio-group">
                            <label class="radio-option">
                              <input type="radio" name="consumerProblems" value="17.4.2.1" @change=${this.handleConsumerProblemsSelection}>
                              Sí
                            </label>
                            <label class="radio-option">
                              <input type="radio" name="consumerProblems" value="17.4.2.2" @change=${this.handleConsumerProblemsSelection}>
                              No
                            </label>
                          </div>
                        </div>
          
                        <div class="problem-category">
                          <p>3. Problemas relacionados con la prestación de un servicio público domiciliario como agua, luz, gas, alcantarillado o basuras.</p>
                          <div class="radio-group">
                            <label class="radio-option">
                              <input type="radio" name="publicServiceProblems" value="17.4.3.1" @change=${this.handlePublicServiceProblemsSelection}>
                              Sí
                            </label>
                            <label class="radio-option">
                              <input type="radio" name="publicServiceProblems" value="17.4.3.2" @change=${this.handlePublicServiceProblemsSelection}>
                              No
                            </label>
                          </div>
                        </div>
          
                        <div class="problem-category">
                          <p>4. Problemas relacionados con su trabajo o empleo, como falta de pago de salarios, reconocimiento o formalización de la relación laboral, cambio en las condiciones laborales, despido, acoso.</p>
                          <div class="radio-group">
                            <label class="radio-option">
                              <input type="radio" name="employmentProblems" value="17.4.4.1" @change=${this.handleEmploymentProblemsSelection}>
                              Sí
                            </label>
                            <label class="radio-option">
                              <input type="radio" name="employmentProblems" value="17.4.4.2" @change=${this.handleEmploymentProblemsSelection}>
                              No
                            </label>
                          </div>
                        </div>
          
                        <div class="problem-category">
                          <p>5. Problemas relacionados con deudas contraídas con el sector financiero, solidario o particulares, respecto a intereses elevados, hipotecas, embargos, quiebras, reportes a centrales de riesgo, deudas educativas.</p>
                          <div class="radio-group">
                            <label class="radio-option">
                              <input type="radio" name="debtProblems" value="17.4.5.1" @change=${this.handleDebtProblemsSelection}>
                              Sí
                            </label>
                            <label class="radio-option">
                              <input type="radio" name="debtProblems" value="17.4.5.2" @change=${this.handleDebtProblemsSelection}>
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="problem-category">
                      <p>6. Problemas relacionados con la vivienda en la que habita o de la que es dueño, o problemas con vecinos por ruidos, malos olores, mascotas, chismes y otros.</p>
                      <div class="radio-group">
                        <label class="radio-option">
                          <input type="radio" name="housingProblems" value="17.4.6.1" @change=${this.handleHousingProblemsSelection}>
                          Sí
                        </label>
                        <label class="radio-option">
                          <input type="radio" name="housingProblems" value="17.4.6.2" @change=${this.handleHousingProblemsSelection}>
                          No
                        </label>
                      </div>
                    </div>
      
                    <div class="problem-category">
                      <p>7. Problemas relacionados con el entorno o el espacio público, como el daño, deterioro o falta de paraderos, bancas, calles, puentes; invasión, uso indebido del espacio público o perjuicios por la ejecución de obras públicas.</p>
                      <div class="radio-group">
                        <label class="radio-option">
                          <input type="radio" name="publicSpaceProblems" value="17.4.7.1" @change=${this.handlePublicSpaceProblemsSelection}>
                          Sí
                        </label>
                        <label class="radio-option">
                          <input type="radio" name="publicSpaceProblems" value="17.4.7.2" @change=${this.handlePublicSpaceProblemsSelection}>
                          No
                        </label>
                      </div>
                    </div>
      
                    <div class="problem-category">
                      <p>8. Problemas relacionados con la propiedad, uso y tenencia de la tierra como disputas sobre títulos, linderos, registro catastral o extinción de dominio.</p>
                      <div class="radio-group">
                        <label class="radio-option">
                          <input type="radio" name="landPropertyProblems" value="17.4.8.1" @change=${this.handleLandPropertyProblemsSelection}>
                          Sí
                        </label>
                        <label class="radio-option">
                          <input type="radio" name="landPropertyProblems" value="17.4.8.2" @change=${this.handleLandPropertyProblemsSelection}>
                          No
                        </label>
                      </div>
                    </div>
      
                    <div class="problem-category">
                      <p>9. Problemas relacionados con el medio ambiente o el acceso a recursos comunitarios, como conflictos por el acceso a fuentes de agua, explotación ilegal de recursos ambientales o contaminación.</p>
                      <div class="radio-group">
                        <label class="radio-option">
                          <input type="radio" name="environmentalProblems" value="17.4.9.1" @change=${this.handleEnvironmentalProblemsSelection}>
                          Sí
                        </label>
                        <label class="radio-option">
                          <input type="radio" name="environmentalProblems" value="17.4.9.2" @change=${this.handleEnvironmentalProblemsSelection}>
                          No
                        </label>
                      </div>
                    </div>
      
                    <div class="problem-category">
                      <p>10. Problemas relacionados con la prestación de los servicios de salud, pensión, riesgos laborales, como en la asignación de citas, medicamentos, calidad, oportunidad, afiliación, negación, reconocimiento o pago de la mesada pensional.</p>
                      <div class="radio-group">
                        <label class="radio-option">
                          <input type="radio" name="healthServiceProblems" value="17.4.10.1" @change=${this.handleHealthServiceProblemsSelection}>
                          Sí
                        </label>
                        <label class="radio-option">
                          <input type="radio" name="healthServiceProblems" value="17.4.10.2" @change=${this.handleHealthServiceProblemsSelection}>
                          No
                        </label>
                      </div>
                    </div>
      
                    <div class="problem-category">
                      <p>11. Problemas en su relación con el Estado, referentes a multas, comparendos, pago de impuestos, expropiaciones, deficiencia en los servicios prestados, abuso de autoridad por policía y ejército o trámites de migrantes.</p>
                      <div class="radio-group">
                        <label class="radio-option">
                          <input type="radio" name="stateRelationProblems" value="17.4.11.1" @change=${this.handleStateRelationProblemsSelection}>
                          Sí
                        </label>
                        <label class="radio-option">
                          <input type="radio" name="stateRelationProblems" value="17.4.11.2" @change=${this.handleStateRelationProblemsSelection}>
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="problem-category">
                <p>12. Problemas relacionados con el servicio de educación y formación, como el acceso, la calidad, y el ambiente educativo (matoneo).</p>
                <div class="radio-group">
                  <label class="radio-option">
                    <input type="radio" name="educationProblems" value="17.4.12.1" @change=${this.handleEducationProblemsSelection}>
                    Sí
                  </label>
                  <label class="radio-option">
                    <input type="radio" name="educationProblems" value="17.4.12.2" @change=${this.handleEducationProblemsSelection}>
                    No
                  </label>
                </div>
              </div>

              <div class="problem-category">
                <p>13. Problemas relacionados con afectaciones, daños o perjuicios causados o derivados de delitos, como hurto, lesiones, calumnias, daños a la propiedad, secuestro, homicidio, ciberdelito, violencia sexual y violencia intrafamiliar.</p>
                <div class="radio-group">
                  <label class="radio-option">
                    <input type="radio" name="crimeRelatedProblems" value="17.4.13.1" @change=${this.handleCrimeRelatedProblemsSelection}>
                    Sí
                  </label>
                  <label class="radio-option">
                    <input type="radio" name="crimeRelatedProblems" value="17.4.13.2" @change=${this.handleCrimeRelatedProblemsSelection}>
                    No
                  </label>
                </div>
              </div>

              <div class="problem-category">
                <p>14. Problemas relacionados con afectaciones, daños o perjuicios causados o derivados del conflicto armado o problemas de orden público como desplazamiento forzado, terrorismo, despojo de tierras, extorsión.</p>
                <div class="radio-group">
                  <label class="radio-option">
                    <input type="radio" name="armedConflictProblems" value="17.4.14.1" @change=${this.handleArmedConflictProblemsSelection}>
                    Sí
                  </label>
                  <label class="radio-option">
                    <input type="radio" name="armedConflictProblems" value="17.4.14.2" @change=${this.handleArmedConflictProblemsSelection}>
                    No
                  </label>
                </div>
              </div>
            </div>
            ${this.renderFollowUpQuestions()}
                  ` : ''}
                    </div>

                <button ?disabled=${this.authorized !== 'si' || !this.age} @click=${this.handleSubmit}>
            Enviar encuesta
          </button>
          </div>
        `;
  }
  renderFollowUpQuestions() {
    // if (this.selectedProblemCategory !== 'familiares') return '';

    return html`
      <div class="follow-up-questions">
        <h2>Preguntas de seguimiento para problemas familiares</h2>

        <div class="follow-up-question">
          <label for="specificProblemType">P18. ¿Cuáles de las siguientes tipologías de problemas lo han afectado personalmente?</label>
          <select id="specificProblemType" .value=${this.specificProblemType} @change=${this.handleSpecificProblemTypeChange}>
            <option value="">Seleccione una opción</option>
            <option value="1">Paternidad / maternidad o adopción</option>
            <option value="2">Separación o divorcio</option>
            <option value="3">Cuotas de alimentos</option>
            <option value="4">Herencias o sucesiones</option>
            <option value="5">Cuidado de personas que más lo requieren</option>
            <option value="6">Gastos del hogar</option>
          </select>
        </div>

        ${this.specificProblemType ? html`
          <button class="add-entry-button" @click=${this.addNewEntry}>
            Agregar entrada para esta tipología
          </button>
        ` : ''}

        ${repeat(this.problemEntries, (entry) => entry.id, (entry, index) => html`
          ${index > 0 ? html`<hr class="entry-divider">` : ''}
          <table class="responsive-table">
            <thead>
              <tr>
                <th>P19. ¿Frente a este problema qué acción tomó?</th>
                <th>P20. ¿A qué institución, autoridad o persona particular usted acudió?</th>
                <th>P21. ¿Le brindaron información suficiente para entender y resolver el problema?</th>
                <th>P22. Nivel de afectación</th>
                <th>P23. Costo total (COP)</th>
                <th>P24. ¿El problema se solucionó?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="P19. Acción tomada">
                  <div class="checkbox-group">
                    ${this.renderCheckboxGroup(19, entry.actionTaken, [
                      'Acudió a una institución, autoridad o persona particular',
                      'Intentó llegar a un acuerdo directamente con quien tuvo el problema',
                      'Actuó de forma violenta',
                      'Acudió a un actor ilegal',
                      'No hizo nada'
                    ], index, 'actionTaken')}
                  </div>
                </td>
                <td data-label="P20. Institución">
                  <input type="text" class="text-input" .value=${entry.institutionInvolved} @input=${(e) => this.handleEntryChange(index, 'institutionInvolved', e.target.value)}>
                </td>
                <td data-label="P21. Información recibida">
                  <div class="checkbox-group">
                    ${this.renderCheckboxGroup(21, entry.informationReceived, ['Sí', 'No'], index, 'informationReceived')}
                  </div>
                </td>
                <td data-label="P22. Nivel de afectación">
                  <div class="checkbox-group">
                    ${this.renderCheckboxGroup(22, entry.affectationLevel, ['Muy baja', 'Baja', 'Media', 'Alta', 'Muy alta'], index, 'affectationLevel')}
                  </div>
                </td>
                <td data-label="P23. Costo total">
                  <input type="number" class="text-input" .value=${entry.totalCost} @input=${(e) => this.handleEntryChange(index, 'totalCost', parseFloat(e.target.value))}>
                </td>
                <td data-label="P24. Problema solucionado">
                  <div class="checkbox-group">
                    ${this.renderCheckboxGroup(24, entry.problemResolved, ['Sí', 'No'], index, 'problemResolved')}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        `)}
      </div>
    `;
  }
  handleAuthorization(e) {
    this.authorized = e.target.value;
  }

  handleAgeSelection(e) {
    this.age = e.target.value;
  }

  handleCultureSelection(e) {
    this.culture = e.target.value;
  }

  handleEducationSelection(e) {
    const value = e.target.value;
    if (e.target.checked) {
      this.education = value;
      this.noSabeEducation = false;
    } else {
      this.education = null;
    }
    this.requestUpdate();
  }

  handleNoSabeEducation(e) {
    this.noSabeEducation = e.target.checked;
    if (this.noSabeEducation) {
      this.education = '10.4.1';
    } else {
      this.education = null;
    }
    this.requestUpdate();
  }
  handleTimeInMunicipalitySelection(e) {
    this.timeInMunicipality = e.target.value;
  }

  handleZoneSelection(e) {
    this.zone = e.target.value;
  }

  handleSelfIdentificationSelection(e) {
    const value = e.target.value;
    if (e.target.checked) {
      this.selfIdentification = [...this.selfIdentification, value];
    } else {
      this.selfIdentification = this.selfIdentification.filter(item => item !== value);
    }
  }

  handleSexSelection(e) {
    this.sex = e.target.value;
  }

  handleSpecificCulturalBarriersSelection(e) {
    const value = e.target.value;
    if (e.target.checked) {
      this.specificCulturalBarriers = [...this.specificCulturalBarriers, value];
    } else {
      this.specificCulturalBarriers = this.specificCulturalBarriers.filter(item => item !== value);
      if (value === '16.4.1.6') {
        this.otherCulturalBarrierText = '';
      }
    }
  }

  handleCulturalBarriersSelection(e) {
    this.culturalBarriers = e.target.value;
    if (this.culturalBarriers === '15.4.1.2') {
      this.specificCulturalBarriers = [];
      this.otherCulturalBarrierText = '';
    }
  }

  handleSpecificCulturalBarriersSelection(e) {
    const value = e.target.value;
    if (e.target.checked) {
      this.specificCulturalBarriers = [...this.specificCulturalBarriers, value];
    } else {
      this.specificCulturalBarriers = this.specificCulturalBarriers.filter(item => item !== value);
      if (value === '16.4.1.6') {
        this.otherCulturalBarrierText = '';
      }
    }
  }
  handleSecurityBarriersSelection(e) {
    this.securityBarriers = e.target.value;
    if (this.securityBarriers === '15.4.3.2') {
      this.specificSecurityBarriers = [];
      this.otherSecurityBarrierText = '';
    }
  }

  handleSpecificSecurityBarriersSelection(e) {
    const value = e.target.value;
    if (e.target.checked) {
      this.specificSecurityBarriers = [...this.specificSecurityBarriers, value];
    } else {
      this.specificSecurityBarriers = this.specificSecurityBarriers.filter(item => item !== value);
      if (value === '16.4.3.4') {
        this.otherSecurityBarrierText = '';
      }
    }
  }

  handleOtherSecurityBarrierInput(e) {
    this.otherSecurityBarrierText = e.target.value;
  }

  handleOtherCulturalBarrierInput(e) {
    this.otherCulturalBarrierText = e.target.value;
  }

  handleGenderBarriersSelection(e) {
    this.genderBarriers = e.target.value;
    if (this.genderBarriers === '15.4.2.2') {
      this.specificGenderBarriers = [];
      this.otherGenderBarrierText = '';
    }
  }

  handleSpecificGenderBarriersSelection(e) {
    const value = e.target.value;
    if (e.target.checked) {
      this.specificGenderBarriers = [...this.specificGenderBarriers, value];
    } else {
      this.specificGenderBarriers = this.specificGenderBarriers.filter(item => item !== value);
      if (value === '16.4.2.5') {
        this.otherGenderBarrierText = '';
      }
    }
  }

  handleOtherGenderBarrierInput(e) {
    this.otherGenderBarrierText = e.target.value;
  }
  isFormValid() {
    return this.authorized === 'si' && this.age && this.culture && this.education;
  }
  handleDisabilityBarriersSelection(e) {
    this.disabilityBarriers = e.target.value;
    if (this.disabilityBarriers === '15.4.4.2') {
      this.specificDisabilityBarriers = [];
      this.otherDisabilityBarrierText = '';
    }
  }

  handleSpecificDisabilityBarriersSelection(e) {
    const value = e.target.value;
    if (e.target.checked) {
      this.specificDisabilityBarriers = [...this.specificDisabilityBarriers, value];
    } else {
      this.specificDisabilityBarriers = this.specificDisabilityBarriers.filter(item => item !== value);
      if (value === '16.4.4.4') {
        this.otherDisabilityBarrierText = '';
      }
    }
  }
  handleFamilyProblemsSelection(e) {
    this.familyProblems = e.target.value;
  }

  handleConsumerProblemsSelection(e) {
    this.consumerProblems = e.target.value;
  }

  handlePublicServiceProblemsSelection(e) {
    this.publicServiceProblems = e.target.value;
  }

  handleEmploymentProblemsSelection(e) {
    this.employmentProblems = e.target.value;
  }

  handleDebtProblemsSelection(e) {
    this.debtProblems = e.target.value;
  }
  handleOtherDisabilityBarrierInput(e) {
    this.otherDisabilityBarrierText = e.target.value;
  }

  handleEconomicBarriersSelection(e) {
    this.economicBarriers = e.target.value;
    if (this.economicBarriers === '15.4.5.2') {
      this.specificEconomicBarriers = [];
      this.otherEconomicBarrierText = '';
    }
  }

  handleSpecificEconomicBarriersSelection(e) {
    const value = e.target.value;
    if (e.target.checked) {
      this.specificEconomicBarriers = [...this.specificEconomicBarriers, value];
    } else {
      this.specificEconomicBarriers = this.specificEconomicBarriers.filter(item => item !== value);
      if (value === '16.4.5.7') {
        this.otherEconomicBarrierText = '';
      }
    }
  }

  handleOtherEconomicBarrierInput(e) {
    this.otherEconomicBarrierText = e.target.value;
  }
  handleGeographicBarriersSelection(e) {
    this.geographicBarriers = e.target.value;
    if (this.geographicBarriers === '15.4.6.2') {
      this.specificGeographicBarriers = [];
      this.otherGeographicBarrierText = '';
    }
  }

  handleSpecificGeographicBarriersSelection(e) {
    const value = e.target.value;
    if (e.target.checked) {
      this.specificGeographicBarriers = [...this.specificGeographicBarriers, value];
    } else {
      this.specificGeographicBarriers = this.specificGeographicBarriers.filter(item => item !== value);
      if (value === '16.4.6.4') {
        this.otherGeographicBarrierText = '';
      }
    }
  }

  handleOtherGeographicBarrierInput(e) {
    this.otherGeographicBarrierText = e.target.value;
  }
  handleInstitutionalBarriersSelection(e) {
    this.institutionalBarriers = e.target.value;
    if (this.institutionalBarriers === '15.4.7.2') {
      this.specificInstitutionalBarriers = [];
      this.otherInstitutionalBarrierText = '';
    }
  }

  handleSpecificInstitutionalBarriersSelection(e) {
    const value = e.target.value;
    if (e.target.checked) {
      this.specificInstitutionalBarriers = [...this.specificInstitutionalBarriers, value];
    } else {
      this.specificInstitutionalBarriers = this.specificInstitutionalBarriers.filter(item => item !== value);
      if (value === '16.4.7.12') {
        this.otherInstitutionalBarrierText = '';
      }
    }
  }

  handleOtherInstitutionalBarrierInput(e) {
    this.otherInstitutionalBarrierText = e.target.value;
  }
  handleTechnologicalBarriersSelection(e) {
    this.technologicalBarriers = e.target.value;
    if (this.technologicalBarriers === '15.4.8.2') {
      this.specificTechnologicalBarriers = [];
      this.otherTechnologicalBarrierText = '';
    }
  }

  handleSpecificTechnologicalBarriersSelection(e) {
    const value = e.target.value;
    if (e.target.checked) {
      this.specificTechnologicalBarriers = [...this.specificTechnologicalBarriers, value];
    } else {
      this.specificTechnologicalBarriers = this.specificTechnologicalBarriers.filter(item => item !== value);
      if (value === '16.4.8.5') {
        this.otherTechnologicalBarrierText = '';
      }
    }
  }
  handleHousingProblemsSelection(e) {
    this.housingProblems = e.target.value;
  }

  handlePublicSpaceProblemsSelection(e) {
    this.publicSpaceProblems = e.target.value;
  }

  handleLandPropertyProblemsSelection(e) {
    this.landPropertyProblems = e.target.value;
  }

  handleEnvironmentalProblemsSelection(e) {
    this.environmentalProblems = e.target.value;
  }

  handleHealthServiceProblemsSelection(e) {
    this.healthServiceProblems = e.target.value;
  }

  handleStateRelationProblemsSelection(e) {
    this.stateRelationProblems = e.target.value;
  }
  handleOtherTechnologicalBarrierInput(e) {
    this.otherTechnologicalBarrierText = e.target.value;
  }
  handleEducationProblemsSelection(e) {
    this.educationProblems = e.target.value;
  }

  handleCrimeRelatedProblemsSelection(e) {
    this.crimeRelatedProblems = e.target.value;
  }

  handleArmedConflictProblemsSelection(e) {
    this.armedConflictProblems = e.target.value;
  }

  renderCheckboxGroup(questionNumber, selectedValue, options, entryIndex, field) {
    return options.map((option, index) => {
      const value = this.generateOptionValue(questionNumber, index + 1);
      return html`
        <label class="checkbox-label">
          <input
            type="checkbox"
            class="checkbox-input"
            .checked=${selectedValue === value}
            @change=${(e) => this.handleCheckboxChange(e, entryIndex, field, value)}
          >
          ${option}
        </label>
      `;
    });
  }

  generateOptionValue(questionNumber, optionIndex) {
    const typologyValue = this.specificProblemType;
    return `${questionNumber}.4.${typologyValue}.${optionIndex}`;
  }

  handleCheckboxChange(e, entryIndex, field, value) {
    const updatedEntries = [...this.problemEntries];
    updatedEntries[entryIndex][field] = e.target.checked ? value : '';
    this.problemEntries = updatedEntries;
  }

  handleSpecificProblemTypeChange(e) {
    this.specificProblemType = e.target.value;
    this.problemEntries = [];
  }



  addNewEntry() {
    const newEntry = {
      id: Date.now(),
      typology: this.specificProblemType,
      actionTaken: '',
      institutionInvolved: '',
      informationReceived: '',
      affectationLevel: '',
      totalCost: 0,
      problemResolved: ''
    };
    this.problemEntries = [...this.problemEntries, newEntry];
  }

  handleEntryChange(index, field, value) {
    const updatedEntries = [...this.problemEntries];
    updatedEntries[index][field] = value;
    this.problemEntries = updatedEntries;
  }
  handleSubmit() {
    if (this.authorized === 'si' && this.age) {
      const formData = this.getFormData();
      const jsonData = JSON.stringify(formData, null, 2);
      console.log('Datos de la encuesta:', jsonData);
      alert('Encuesta enviada. Revisa la consola para ver los datos en formato JSON.');
    }
  }
  isFormValid() {
    return this.authorized === 'si' && this.age && this.culture && this.education;
  }
}
window.customElements.define('survey-juridica', SurveyJuridica)