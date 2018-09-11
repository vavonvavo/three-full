/**
 * @file The main configuration file for es6-convertor
 *
 * @author Itee <valcketristan@gmail.com>
 * @license MIT
 */

const path = require( 'path' )

module.exports = {
    banner:    '//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n' +
               '// WARNING: This file was auto-generated, any change will be overridden in next release. Please use configs/es6.conf.js then run "npm run convert". //\n' +
               '//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n',
    inputs:    [
        path.join( __dirname, '..', 'node_modules', 'three', 'examples' ),
        path.join( __dirname, '..', 'node_modules', 'three', 'examples', 'js' ),
        path.join( __dirname, '..', 'node_modules', 'three', 'src' )
    ],
    excludes:  [

        // Specific Three stuff to ignore
        'build',
        'libs',
        'Three.js',
        'Three.Legacy.js',
        'polyfills.js',
        '.DS_Store',						// Ignore DS_Store from r90

        // Intermediary exporter files
        'Curves.js',
        'Geometries.js',
        'Materials.js',
        'Nodes.js',
        'THREE.Nodes.js',

        // Worker
        'RaytracingWorker.js',				// Ignore worker
        'OffscreenCanvas.js',				// Ignore worker
        'ctm',                              // Todo: Need to check worker import

        // Folder
        'draco',                            // draco_decoder use Eval !
        'sea3d',                            // Duplicate export 'SEA3D'
        'crossfade',                        // Scene has already been declared

        // Specific file
        'Cloth.js',							// Use global variable from example html ! Need to be refactored
        'ParametricGeometries.js',          // Bug TorusKnotCurve from es6-exports
        'OceanShaders.js',                  // Todo: check how to extends imported lib properly
        'RectAreaLightUniformsLib.js',      // Todo: check how to extends imported lib properly
        'Volume.js',                        // damned eval
        'NRRDLoader.js',                    // Import Volume.js
        'XLoader.js'                     	// amd module
    ],
    output:    path.join( __dirname, '..', 'sources' ),
    edgeCases: {
        BokehShader2:                {
            importsOverride: ['Vector2'],
            replacements:    [
                [ 'BokehShader', 'BokehShader2' ],
                [ 'BokehShader2 = {', 'var BokehShader2 = {' ]
            ],
            exportsOverride: [ 'BokehShader2', 'BokehDepthShader' ]
        },
    },
    edgeCases: {
        '3MFLoader':                 {
//            imports: [
//                'DefaultLoadingManager',
//                'LoaderUtils'
//            ]
        },
        Math: {
            importsOverride: []
        },
        AdaptiveToneMappingPass:     {
//            imports: [
//                'CopyShader',
//                'LuminosityShader',
//                'ToneMapShader',
//                'UniformsUtils'
//            ]
        },
        AfterimagePass:              {
//            imports: [
//                'AfterimageShader',
//                'UniformsUtils'
//            ]
        },
        AMFLoader:                   {
//            imports: [
//                'DefaultLoadingManager',
//                'LoaderUtils'
//            ]
        },
        AnimationClipCreator:        {
            outputOverride: 'animation/AnimationClipCreator.js'
        },
        ArcCurve:                    {
            outputOverride: 'curves/ArcCurve.js'
        },
        AssimpJSONLoader:            {
//            imports: [
//                'DefaultLoadingManager',
//                'LoaderUtils',
//                'Loader'
//            ]
        },
        AssimpLoader:                {
//            imports: [
//                'DefaultLoadingManager',
//                'LoaderUtils',
//                'Loader'
//            ]
        },
        AWDLoader:                   {
//            imports: [ 'DefaultLoadingManager' ]
        },
        BabylonLoader:               {
//            imports: [ 'DefaultLoadingManager' ]
        },
        BinaryLoader:                {
//            imports: [
//                'DefaultLoadingManager',
//                'LoaderUtils',
//                'Loader'
//            ]
        },
        BloomPass:                   {
//            imports: [
//                'CopyShader',
//                'ConvolutionShader',
//                'UniformsUtils'
//            ]
        },
        BokehPass:                   {
//            imports: [
//                'BokehShader',
//                'UniformsUtils'
//            ]
        },
        BokehShader2:                {
            replacements:    [
                [ 'BokehShader', 'BokehShader2' ],
                [ 'BokehShader2 = {', 'var BokehShader2 = {' ]
            ],
            exportsOverride: [ 'BokehShader2', 'BokehDepthShader' ]
        },
        BufferGeometryUtils:         {
            outputOverride: 'utils/BufferGeometryUtils.js'
        },
        BVHLoader:                   {
//            imports: [ 'DefaultLoadingManager' ]
        },
        Car:                         {
//            imports:        [
//                '_Math'
//            ],
            outputOverride: 'objects/Car.js'
        },
        CatmullRomCurve3:            {
            outputOverride: 'curves/CatmullRomCurve3.js'
        },
        CCDIKSolver:                 {
            exportsOverride: [
                'CCDIKSolver'
            ]
        },
        CinematicCamera:             {
//            imports: [
//                'BokehShader',
//                'BokehDepthShader',
//                'UniformsUtils'
//            ]
        },
        ColladaLoader:               {
//            imports: [
//                'DefaultLoadingManager',
//                'LoaderUtils',
//                'Loader',
//                '_Math'
//            ]
        },
        ColorConverter:              {
//            imports: [ '_Math' ]
        },
        ColorNode:                   {
//            imports: [ 'NodeMaterial' ]
        },
        ConvexObjectBreaker:         {
            outputOverride: 'modifiers/ConvexObjectBreaker.js'
        },
        CubeTexturePass:             {
//            imports: [ 'ShaderLib' ]
        },
        CubicBezierCurve:            {
            outputOverride: 'curves/CubicBezierCurve.js'
        },
        CubicBezierCurve3:           {
            outputOverride: 'curves/CubicBezierCurve3.js'
        },
        Curve:                       {
            outputOverride: 'curves/Curve.js'
        },
        CurveExtras:                 {
            replacements:   [
                [ 'Curves.GrannyKnot = GrannyKnot;', '' ],
                [ 'Curves.HeartCurve = HeartCurve;', '' ],
                [ 'Curves.VivianiCurve = VivianiCurve;', '' ],
                [ 'Curves.KnotCurve = KnotCurve;', '' ],
                [ 'Curves.HelixCurve = HelixCurve;', '' ],
                [ 'Curves.TrefoilKnot = TrefoilKnot;', '' ],
                [ 'Curves.TorusKnot = TorusKnot;', '' ],
                [ 'Curves.CinquefoilKnot = CinquefoilKnot;', '' ],
                [ 'Curves.TrefoilPolynomialKnot = TrefoilPolynomialKnot;', '' ],
                [ 'Curves.FigureEightPolynomialKnot = FigureEightPolynomialKnot;', '' ],
                [ 'Curves.DecoratedTorusKnot4a = DecoratedTorusKnot4a;', '' ],
                [ 'Curves.DecoratedTorusKnot4b = DecoratedTorusKnot4b;', '' ],
                [ 'Curves.DecoratedTorusKnot5a = DecoratedTorusKnot5a;', '' ],
                [ 'Curves.DecoratedTorusKnot5c = DecoratedTorusKnot5c;', '' ]
            ],
            outputOverride: 'curves/CurveExtras.js'
        },
        CurvePath:                   {
            // Equivalent to ( import * as Curves from 'intermediary exporter file Curves' )
//            imports:        [
//                'ArcCurve',
//                'CatmullRomCurve3',
//                'CubicBezierCurve',
//                'CubicBezierCurve3',
//                'EllipseCurve',
//                'LineCurve',
//                'LineCurve3',
//                'QuadraticBezierCurve',
//                'QuadraticBezierCurve3',
//                'SplineCurve'
//            ],
            replacements:   [
                [
                    'function CurvePath() {',
                    'var Curves = {\n' +
                    '    ArcCurve: ArcCurve,\n' +
                    '    CatmullRomCurve3: CatmullRomCurve3,\n' +
                    '    CubicBezierCurve: CubicBezierCurve,\n' +
                    '    CubicBezierCurve3: CubicBezierCurve3,\n' +
                    '    EllipseCurve: EllipseCurve,\n' +
                    '    LineCurve: LineCurve,\n' +
                    '    LineCurve3: LineCurve3,\n' +
                    '    QuadraticBezierCurve: QuadraticBezierCurve,\n' +
                    '    QuadraticBezierCurve3: QuadraticBezierCurve3,\n' +
                    '    SplineCurve: SplineCurve\n' +
                    '}\n' +
                    'function CurvePath() {'
                ]
            ],
            outputOverride: 'core/CurvePath.js'
        },
        Detector:                    {
            outputOverride: 'helpers/Detector.js',
            replacements:   [
                [ /if \( typeof module === 'object' \) {/g, '' ],
                [ /module\.exports\s*=\s*\{?[^}]*}?/g, '' ]
            ]
        },
        DeviceOrientationControls:   {
//            imports: [
//                '_Math'
//            ]
        },
        DotScreenPass:               {
//            imports: [
//                'DotScreenShader',
//                'UniformsUtils'
//            ]
        },
        DRACOLoader:                 {
//            imports: [
//                'DefaultLoadingManager',
//                'Uint8BufferAttribute',
//                'Uint16BufferAttribute',
//                'Uint32BufferAttribute',
//                'Int8BufferAttribute',
//                'Int16BufferAttribute',
//                'Int32BufferAttribute',
//                'Float32BufferAttribute',
//            ]
        },
        Earcut:                      {
//            importsOverride: [], // Todo: care about redeclaration/local implementation with same name than exporte from other files
            outputOverride:  'misc/Earcut.js'
        },
        EffectComposer:              {
//            imports: [ 'CopyShader' ]
        },
        EllipseCurve:                {
            outputOverride: 'curves/EllipseCurve.js'
        },
        EXRLoader:                   {
//            imports: [ 'DefaultLoadingManager' ]
        },
        FBXLoader:                   {
//            imports:         [
//                'DefaultLoadingManager',
//                'LoaderUtils',
//                'PropertyBinding',
//                '_Math'
//            ],
            exportsOverride: [ 'FBXLoader' ]
        },
        FilmPass:                    {
//            imports: [
//                'FilmShader',
//                'UniformsUtils'
//            ]
        },
        FirstPersonControls:         {
//            imports: [
//                '_Math'
//            ]
        },
        Font:                        {
            outputOverride: 'core/Font.js'
        },
        FunctionNode_Implementation: {
            importsOverride: [
                [ 'FunctionNode', 'from', './FunctionNode_Declaration' ],
                'NodeLib'
            ]
        },
        GCodeLoader:                 {
//            imports: [ 'DefaultLoadingManager' ]
        },
        GlitchPass:                  {
//            imports: [
//                'DigitalGlitch',
//                'UniformsUtils',
//                '_Math'
//            ]
        },
        GLNode:                      {
//            imports:      [ '_Math' ],
            replacements: [
                [ 'this.uuid = Math.generateUUID();', 'this.uuid = _Math.generateUUID();' ]
            ]
        },
        GLTFExporter:                {
//            imports: [
//                '_Math',
//                'PropertyBinding',
//                'RGBAFormat'
//            ]
        },
        GLTFLoader:                  {
//            imports:         [
//                'DefaultLoadingManager',
//                'MeshPhongMaterial',
//                'MeshLambertMaterial',
//                'MeshBasicMaterial',
//                'ShaderLib',
//                'UniformsUtils',
//                'Loader',
//                'LoaderUtils',
//                'AnimationUtils',
//                '_Math',
//                'Matrix3',
//                'Vector3',
//                'Vector4',
//                'Texture',
//                'Material',
//                'NumberKeyframeTrack',
//                'QuaternionKeyframeTrack',
//                'VectorKeyframeTrack',
//                'PropertyBinding',
//                'BufferGeometryUtils'
//            ],
            exportsOverride: [
                'GLTFLoader'
            ]
        },
        GPUComputationRenderer:      {
            exportsOverride: [ 'GPUComputationRenderer' ],
            outputOverride:  'renderers/GPUComputationRenderer.js'
        },
        GPUParticleSystem:           {
//            imports:        [ '_Math' ],
            outputOverride: 'objects/GPUParticleSystem.js'
        },
        Gyroscope:                   {
            outputOverride: 'objects/Gyroscope.js'
        },
        HalftonePass:                {
//            imports: [
//                'UniformsUtils',
//                'HalftoneShader'
//            ]
        },
        HDRCubeTextureLoader:        {
//            imports: [ 'DefaultLoadingManager' ]
        },
        hilbert2D:                   {
            exportsOverride: [ 'hilbert2D' ],
        },
        hilbert3D:                   {
            exportsOverride: [ 'hilbert3D' ],
        },
        ImmediateRenderObject:       {
            outputOverride: 'objects/ImmediateRenderObject.js'
        },
        ImprovedNoise:               {
            exportsOverride: [ 'ImprovedNoise' ],
            outputOverride:  'misc/ImprovedNoise.js'
        },
        Interpolations:              {
            outputOverride: 'core/Interpolations.js'
        },
        KMZLoader:                   {
//            imports: [ 'DefaultLoadingManager' ]
        },
        LegacyGLTFLoader:            {
//            imports:         [
//                'DefaultLoadingManager',
//                'Loader',
//                'Matrix3',
//                'Vector2',
//                'Vector3',
//                'Vector4',
//                'UniformsUtils',
//                'MeshBasicMaterial',
//                'MeshLambertMaterial',
//                'QuaternionKeyframeTrack',
//                'VectorKeyframeTrack',
//                'AnimationUtils',
//                'LoaderUtils',
//                '_Math'
//            ],
            exportsOverride: [ 'LegacyGLTFLoader' ]
        },
        LineCurve:                   {
            outputOverride: 'curves/LineCurve.js'
        },
        LineCurve3:                  {
            outputOverride: 'curves/LineCurve3.js'
        },
        LineMaterial:                {
//            imports: [
//                'UniformsLib',
//                'UniformsUtils',
//                'ShaderLib'
//            ]
        },
        LoaderSupport:               {
//            imports:      [ 'DefaultLoadingManager' ],
            replacements: [
                [ 'if ( var LoaderSupport === undefined )', '/*\nif ( var LoaderSupport === undefined )' ],
                [ 'LoaderSupport.Validator = {', '*/\nvar LoaderSupport = {}\nLoaderSupport.Validator = {' ]
            ]
        },
        Lut:                         {
            replacements: [
                [ 'ColorMapKeywords = ', 'var ColorMapKeywords = ' ]
            ]
        },
        MarchingCubes:               {
            replacements:   [
                [ 'edgeTable = new Int32Array', 'var edgeTable = new Int32Array' ],
                [ 'triTable = new Int32Array', 'var triTable = new Int32Array' ]
            ],
            outputOverride: 'objects/MarchingCubes.js'
        },
        MaterialLoader:              {
            // Equivalent to ( import * as Materials from 'intermediary exporter file Materials' )
//            imports:      [
//                'LineBasicMaterial',
//                'LineDashedMaterial',
//                'MeshBasicMaterial',
//                'MeshDepthMaterial',
//                'MeshDistanceMaterial',
//                'MeshLambertMaterial',
//                'MeshNormalMaterial',
//                'MeshPhongMaterial',
//                'MeshPhysicalMaterial',
//                'MeshStandardMaterial',
//                'MeshToonMaterial',
//                'PointsMaterial',
//                'RawShaderMaterial',
//                'ShaderMaterial',
//                'ShadowMaterial',
//                'SpriteMaterial'
//            ],
            replacements: [
                [
                    'var material = new Materials[ json.type ]();',
                    'var Materials = {\n' +
                    '            LineBasicMaterial: LineBasicMaterial,\n' +
                    '            LineDashedMaterial: LineDashedMaterial,\n' +
                    '            MeshBasicMaterial: MeshBasicMaterial,\n' +
                    '            MeshDepthMaterial: MeshDepthMaterial,\n' +
                    '            MeshDistanceMaterial: MeshDistanceMaterial,\n' +
                    '            MeshLambertMaterial: MeshLambertMaterial,\n' +
                    '            MeshNormalMaterial: MeshNormalMaterial,\n' +
                    '            MeshPhongMaterial: MeshPhongMaterial,\n' +
                    '            MeshPhysicalMaterial: MeshPhysicalMaterial,\n' +
                    '            MeshStandardMaterial: MeshStandardMaterial,\n' +
                    '            MeshToonMaterial: MeshToonMaterial,\n' +
                    '            PointsMaterial: PointsMaterial,\n' +
                    '            RawShaderMaterial: RawShaderMaterial,\n' +
                    '            ShaderMaterial: ShaderMaterial,\n' +
                    '            ShadowMaterial: ShadowMaterial,\n' +
                    '            SpriteMaterial: SpriteMaterial\n' +
                    '\t\t}\n' +
                    '\t\tvar material = new Materials[ json.type ]();'
                ]
            ]
        },
        MD2Loader:                   {
//            imports: [
//                'DefaultLoadingManager',
//                'AnimationClip'
//            ]
        },
        MD2Character:                {
            outputOverride: 'objects/MD2Character.js'
        },
        MD2CharacterComplex:         {
//            imports:        [
//                '_Math'
//            ],
            outputOverride: 'objects/MD2CharacterComplex.js'
        },
        MMDAnimationHelper:          {
            exportsOverride: [ 'MMDAnimationHelper' ]
        },
        MMDLoader:                   {
//            imports:         [
//                'DefaultLoadingManager',
//                'LoaderUtils',
//                '_Math'
//            ],
            exportsOverride: [ 'MMDLoader' ]
        },
        MMDPhysics:                  {
            exportsOverride: [ 'MMDPhysics' ]
        },
        MorphAnimMesh:               {
//            imports:        [
//                'AnimationClip'
//            ],
            outputOverride: 'objects/MorphAnimMesh.js'
        },
        MorphBlendMesh:              {
//            imports:        [
//                '_Math'
//            ],
            outputOverride: 'objects/MorphBlendMesh.js'
        },
        MTLLoader:                   {
//            imports: [
//                'DefaultLoadingManager',
//                'Loader'
//            ]
        },
        Node:                        {
//            imports: [ '_Math' ]
        },
        NodeBuilder:                 {
//            imports: [ 'TextureCubeNode' ]
        },
        NodeLib_Implementation:      {
            importsOverride: [
                [ 'NodeLib', 'from', './NodeLib_Declaration' ],
                'UVNode',
                'PositionNode',
                'NormalNode',
                'TimerNode',
                'ConstNode',
                'FunctionNode'
            ]
        },
        NodeMaterial:                {
//            imports: [ 'NodeLib' ]
        },
        NodeMaterialLoader:          {
//            imports:      [
//                'DefaultLoadingManager',
//                'CameraNode'
//            ],
//            replacements: [
//                [ 'NodeMaterialLoaderUtils = {', 'var NodeMaterialLoaderUtils = {' ]
//            ],
            exports:      [
                'NodeMaterialLoaderUtils'
            ]
        },
        NodePass:                    {
//            imports: [
//                '_Math'
//            ]
        },
        NURBSCurve:                  {
//            imports: [ 'NURBSUtils' ]
        },
        NURBSSurface:                {
//            imports: [ 'NURBSUtils' ]
        },
        ObjectLoader:                {
            // Equivalent to ( import * as Geometries from 'intermediary exporter file Geometries' )
//            imports:      [
//                'WireframeGeometry',
//                //'ParametricGeometry', 		Invalid due to TorusKnotCurve bug
//                //'ParametricBufferGeometry',	Invalid due to TorusKnotCurve bug
//                'TetrahedronGeometry',
//                'TetrahedronBufferGeometry',
//                'OctahedronGeometry',
//                'OctahedronBufferGeometry',
//                'IcosahedronGeometry',
//                'IcosahedronBufferGeometry',
//                'DodecahedronGeometry',
//                'DodecahedronBufferGeometry',
//                'PolyhedronGeometry',
//                'PolyhedronBufferGeometry',
//                'TubeGeometry',
//                'TubeBufferGeometry',
//                'TorusKnotGeometry',
//                'TorusGeometry',
//                'TorusBufferGeometry',
//                'TextGeometry',
//                'TextBufferGeometry',
//                'SphereGeometry',
//                'SphereBufferGeometry',
//                'RingGeometry',
//                'RingBufferGeometry',
//                'PlaneGeometry',
//                'PlaneBufferGeometry',
//                'LatheGeometry',
//                'LatheBufferGeometry',
//                'ShapeGeometry',
//                'ShapeBufferGeometry',
//                'ExtrudeGeometry',
//                'ExtrudeBufferGeometry',
//                'EdgesGeometry',
//                'ConeGeometry',
//                'ConeBufferGeometry',
//                'CylinderGeometry',
//                'CylinderBufferGeometry',
//                'CircleGeometry',
//                'CircleBufferGeometry',
//                'BoxGeometry',
//                'BoxBufferGeometry'
//            ],
            replacements: [
                [
                    'function ObjectLoader( manager ) {',
                    'var Geometries = {\n' +
                    '    WireframeGeometry: WireframeGeometry,\n' +
                    '    TetrahedronGeometry: TetrahedronGeometry,\n' +
                    '    TetrahedronBufferGeometry: TetrahedronBufferGeometry,\n' +
                    '    OctahedronGeometry: OctahedronGeometry,\n' +
                    '    OctahedronBufferGeometry: OctahedronBufferGeometry,\n' +
                    '    IcosahedronGeometry: IcosahedronGeometry,\n' +
                    '    IcosahedronBufferGeometry: IcosahedronBufferGeometry,\n' +
                    '    DodecahedronGeometry: DodecahedronGeometry,\n' +
                    '    DodecahedronBufferGeometry: DodecahedronBufferGeometry,\n' +
                    '    PolyhedronGeometry: PolyhedronGeometry,\n' +
                    '    PolyhedronBufferGeometry: PolyhedronBufferGeometry,\n' +
                    '    TubeGeometry: TubeGeometry,\n' +
                    '    TubeBufferGeometry: TubeBufferGeometry,\n' +
                    '    TorusKnotGeometry: TorusKnotGeometry,\n' +
                    '    TorusGeometry: TorusGeometry,\n' +
                    '    TorusBufferGeometry: TorusBufferGeometry,\n' +
                    '    TextGeometry: TextGeometry,\n' +
                    '    TextBufferGeometry: TextBufferGeometry,\n' +
                    '    SphereGeometry: SphereGeometry,\n' +
                    '    SphereBufferGeometry: SphereBufferGeometry,\n' +
                    '    RingGeometry: RingGeometry,\n' +
                    '    RingBufferGeometry: RingBufferGeometry,\n' +
                    '    PlaneGeometry: PlaneGeometry,\n' +
                    '    PlaneBufferGeometry: PlaneBufferGeometry,\n' +
                    '    LatheGeometry: LatheGeometry,\n' +
                    '    LatheBufferGeometry: LatheBufferGeometry,\n' +
                    '    ShapeGeometry: ShapeGeometry,\n' +
                    '    ShapeBufferGeometry: ShapeBufferGeometry,\n' +
                    '    ExtrudeGeometry: ExtrudeGeometry,\n' +
                    '    ExtrudeBufferGeometry: ExtrudeBufferGeometry,\n' +
                    '    EdgesGeometry: EdgesGeometry,\n' +
                    '    ConeGeometry: ConeGeometry,\n' +
                    '    ConeBufferGeometry: ConeBufferGeometry,\n' +
                    '    CylinderGeometry: CylinderGeometry,\n' +
                    '    CylinderBufferGeometry: CylinderBufferGeometry,\n' +
                    '    CircleGeometry: CircleGeometry,\n' +
                    '    CircleBufferGeometry: CircleBufferGeometry,\n' +
                    '    BoxGeometry: BoxGeometry,\n' +
                    '    BoxBufferGeometry: BoxBufferGeometry\n' +
                    '}\n' +
                    'function ObjectLoader( manager ) {'
                ]
            ]
        },
        OBJLoader:                   {
//            imports:         [ 'DefaultLoadingManager' ],
            exportsOverride: [ 'OBJLoader' ]
        },
        OBJLoader2:                  {
//            imports:      [
//                'DefaultLoadingManager',
//                'LoaderUtils'
//            ],
            replacements: [
                [ 'if ( var OBJLoader2 === undefined ) { var OBJLoader2 = {} }', '' ],
                [ 'THREE = { LoaderSupport: {} };', 'var LoaderSupport = {};' ]
            ]
        },
        Ocean:                       {
//            imports:        [
//                'ShaderLib',
//                'UniformsUtils'
//            ],
            outputOverride: 'objects/Ocean.js'
        },
        OceanShaders:                {
//            imports: [ 'ShaderLib' ]
        },
        Octree:                      {
//            imports:        [
//                '_Math'
//            ],
            replacements:   [
                [ 'instanceof var OctreeNode', 'instanceof OctreeNode' ],
                [ 'this, \'', 'this )' ],
            ],
            outputOverride: 'utils/Octree.js'
        },
        OrbitControls:               {
            replacements: [
                [ 'ScreenSpacePanning = 0;', 'var ScreenSpacePanning = 0;' ],
                [ 'HorizontalPanning = 1;', 'var HorizontalPanning = 1;' ]
            ]
        },
        OutlineEffect:               {
//            imports: [ 'ShaderLib' ]
        },
        OutlinePass:                 {
//            imports: [
//                'CopyShader',
//                'UniformsUtils'
//            ]
        },
        Pass:                        {
            exportsOverride: [ 'Pass' ]
        },
        Path:                        {
            outputOverride: 'core/Path.js'
        },
        PDBLoader:                   {
//            imports: [ 'DefaultLoadingManager' ]
        },
        PlayCanvasLoader:            {
//            imports: [ 'DefaultLoadingManager' ]
        },
        PRNG:                        {
            outputOverride:  'utils/PRNG.js',
            exportsOverride: [ 'PRNG' ]
        },
        PRWMLoader:                  {
//            imports: [ 'DefaultLoadingManager' ]
        },
        ParametricGeometries:        {
            exports: [ 'ParametricGeometries' ]
        },
        PCDLoader:                   {
//            imports: [
//                'DefaultLoadingManager',
//                'LoaderUtils'
//            ]
        },
        PhongNode:                   {
//            imports: [
//                'UniformsUtils',
//                'UniformsLib'
//            ]
        },
        PLYLoader:                   {
//            imports: [
//                'DefaultLoadingManager',
//                'LoaderUtils'
//            ]
        },
        PVRLoader:                   {
//            imports: [ 'DefaultLoadingManager' ]
        },
        QuadraticBezierCurve:        {
            outputOverride: 'curves/QuadraticBezierCurve.js'
        },
        QuadraticBezierCurve3:       {
            outputOverride: 'curves/QuadraticBezierCurve3.js'
        },
        QuickHull:                   {
            exportsOverride: [ 'QuickHull' ],
            outputOverride:  'utils/QuickHull.js'
        },
        Refractor:                   {
//            imports: [
//                'UniformsUtils',
//                '_Math'
//            ]
        },
        Reflector:                   {
//            imports: [
//                'UniformsUtils',
//                '_Math'
//            ]
        },
        RGBELoader:                  {
//            imports:      [ 'DefaultLoadingManager' ],
            replacements: [
                [ 'var HDRLoader = RGBELoader', 'var RGBELoader' ],
                [ /(return null;[\s\n\r]+};)/g, '$1\nvar HDRLoader = RGBELoader;\n\n' ],
            ]

        },
        RollerCoaster:               {
            exportsOverride: [
                'RollerCoasterGeometry',
                'RollerCoasterLiftersGeometry',
                'RollerCoasterShadowGeometry',
                'SkyGeometry',
                'TreesGeometry'
            ],
            outputOverride:  'objects/RollerCoaster.js'
        },
        SAOPass:                     {
//            imports: [
//                'SAOShader',
//                'DepthLimitedBlurShader',
//                'CopyShader',
//                'UnpackDepthRGBAShader',
//                'BlurShaderUtils',
//                'UniformsUtils'
//            ]
        },
        SSAOPass:                    {
//            imports: [
//                'SSAOShader'
//            ]
        },
        SavePass:                    {
//            imports: [
//                'CopyShader',
//                'UniformsUtils'
//            ]
        },

        // Move all shaders in sources/shaders folder
        // Todo: Allow a redirection map
        ShaderChunk:       {
            importsOverride: [
                [ 'default as alphamap_fragment', 'from', './ShaderChunk/alphamap_fragment.glsl' ],
                [ 'default as alphamap_pars_fragment', 'from', './ShaderChunk/alphamap_pars_fragment.glsl' ],
                [ 'default as alphatest_fragment', 'from', './ShaderChunk/alphatest_fragment.glsl' ],
                [ 'default as aomap_fragment', 'from', './ShaderChunk/aomap_fragment.glsl' ],
                [ 'default as aomap_pars_fragment', 'from', './ShaderChunk/aomap_pars_fragment.glsl' ],
                [ 'default as begin_vertex', 'from', './ShaderChunk/begin_vertex.glsl' ],
                [ 'default as beginnormal_vertex', 'from', './ShaderChunk/beginnormal_vertex.glsl' ],
                [ 'default as bsdfs', 'from', './ShaderChunk/bsdfs.glsl' ],
                [ 'default as bumpmap_pars_fragment', 'from', './ShaderChunk/bumpmap_pars_fragment.glsl' ],
                [ 'default as clipping_planes_fragment', 'from', './ShaderChunk/clipping_planes_fragment.glsl' ],
                [ 'default as clipping_planes_pars_fragment', 'from', './ShaderChunk/clipping_planes_pars_fragment.glsl' ],
                [ 'default as clipping_planes_pars_vertex', 'from', './ShaderChunk/clipping_planes_pars_vertex.glsl' ],
                [ 'default as clipping_planes_vertex', 'from', './ShaderChunk/clipping_planes_vertex.glsl' ],
                [ 'default as color_fragment', 'from', './ShaderChunk/color_fragment.glsl' ],
                [ 'default as color_pars_fragment', 'from', './ShaderChunk/color_pars_fragment.glsl' ],
                [ 'default as color_pars_vertex', 'from', './ShaderChunk/color_pars_vertex.glsl' ],
                [ 'default as color_vertex', 'from', './ShaderChunk/color_vertex.glsl' ],
                [ 'default as common', 'from', './ShaderChunk/common.glsl' ],
                [ 'default as cube_uv_reflection_fragment', 'from', './ShaderChunk/cube_uv_reflection_fragment.glsl' ],
                [ 'default as defaultnormal_vertex', 'from', './ShaderChunk/defaultnormal_vertex.glsl' ],
                [ 'default as displacementmap_pars_vertex', 'from', './ShaderChunk/displacementmap_pars_vertex.glsl' ],
                [ 'default as displacementmap_vertex', 'from', './ShaderChunk/displacementmap_vertex.glsl' ],
                [ 'default as emissivemap_fragment', 'from', './ShaderChunk/emissivemap_fragment.glsl' ],
                [ 'default as emissivemap_pars_fragment', 'from', './ShaderChunk/emissivemap_pars_fragment.glsl' ],
                [ 'default as encodings_fragment', 'from', './ShaderChunk/encodings_fragment.glsl' ],
                [ 'default as encodings_pars_fragment', 'from', './ShaderChunk/encodings_pars_fragment.glsl' ],
                [ 'default as envmap_fragment', 'from', './ShaderChunk/envmap_fragment.glsl' ],
                [ 'default as envmap_pars_fragment', 'from', './ShaderChunk/envmap_pars_fragment.glsl' ],
                [ 'default as envmap_pars_vertex', 'from', './ShaderChunk/envmap_pars_vertex.glsl' ],
                [ 'default as envmap_vertex', 'from', './ShaderChunk/envmap_vertex.glsl' ],
                [ 'default as fog_vertex', 'from', './ShaderChunk/fog_vertex.glsl' ],
                [ 'default as fog_pars_vertex', 'from', './ShaderChunk/fog_pars_vertex.glsl' ],
                [ 'default as fog_fragment', 'from', './ShaderChunk/fog_fragment.glsl' ],
                [ 'default as fog_pars_fragment', 'from', './ShaderChunk/fog_pars_fragment.glsl' ],
                [ 'default as gradientmap_pars_fragment', 'from', './ShaderChunk/gradientmap_pars_fragment.glsl' ],
                [ 'default as lightmap_fragment', 'from', './ShaderChunk/lightmap_fragment.glsl' ],
                [ 'default as lightmap_pars_fragment', 'from', './ShaderChunk/lightmap_pars_fragment.glsl' ],
                [ 'default as lights_lambert_vertex', 'from', './ShaderChunk/lights_lambert_vertex.glsl' ],
                [ 'default as lights_pars_begin', 'from', './ShaderChunk/lights_pars_begin.glsl' ],
                [ 'default as envmap_physical_pars_fragment', 'from', './ShaderChunk/envmap_physical_pars_fragment.glsl' ],
                [ 'default as lights_phong_fragment', 'from', './ShaderChunk/lights_phong_fragment.glsl' ],
                [ 'default as lights_phong_pars_fragment', 'from', './ShaderChunk/lights_phong_pars_fragment.glsl' ],
                [ 'default as lights_physical_fragment', 'from', './ShaderChunk/lights_physical_fragment.glsl' ],
                [ 'default as lights_physical_pars_fragment', 'from', './ShaderChunk/lights_physical_pars_fragment.glsl' ],
                [ 'default as lights_fragment_begin', 'from', './ShaderChunk/lights_fragment_begin.glsl' ],
                [ 'default as lights_fragment_maps', 'from', './ShaderChunk/lights_fragment_maps.glsl' ],
                [ 'default as lights_fragment_end', 'from', './ShaderChunk/lights_fragment_end.glsl' ],
                [ 'default as logdepthbuf_fragment', 'from', './ShaderChunk/logdepthbuf_fragment.glsl' ],
                [ 'default as logdepthbuf_pars_fragment', 'from', './ShaderChunk/logdepthbuf_pars_fragment.glsl' ],
                [ 'default as logdepthbuf_pars_vertex', 'from', './ShaderChunk/logdepthbuf_pars_vertex.glsl' ],
                [ 'default as logdepthbuf_vertex', 'from', './ShaderChunk/logdepthbuf_vertex.glsl' ],
                [ 'default as map_fragment', 'from', './ShaderChunk/map_fragment.glsl' ],
                [ 'default as map_pars_fragment', 'from', './ShaderChunk/map_pars_fragment.glsl' ],
                [ 'default as map_particle_fragment', 'from', './ShaderChunk/map_particle_fragment.glsl' ],
                [ 'default as map_particle_pars_fragment', 'from', './ShaderChunk/map_particle_pars_fragment.glsl' ],
                [ 'default as metalnessmap_fragment', 'from', './ShaderChunk/metalnessmap_fragment.glsl' ],
                [ 'default as metalnessmap_pars_fragment', 'from', './ShaderChunk/metalnessmap_pars_fragment.glsl' ],
                [ 'default as morphnormal_vertex', 'from', './ShaderChunk/morphnormal_vertex.glsl' ],
                [ 'default as morphtarget_pars_vertex', 'from', './ShaderChunk/morphtarget_pars_vertex.glsl' ],
                [ 'default as morphtarget_vertex', 'from', './ShaderChunk/morphtarget_vertex.glsl' ],
                [ 'default as normal_fragment_begin', 'from', './ShaderChunk/normal_fragment_begin.glsl' ],
                [ 'default as normal_fragment_maps', 'from', './ShaderChunk/normal_fragment_maps.glsl' ],
                [ 'default as normalmap_pars_fragment', 'from', './ShaderChunk/normalmap_pars_fragment.glsl' ],
                [ 'default as packing', 'from', './ShaderChunk/packing.glsl' ],
                [ 'default as premultiplied_alpha_fragment', 'from', './ShaderChunk/premultiplied_alpha_fragment.glsl' ],
                [ 'default as project_vertex', 'from', './ShaderChunk/project_vertex.glsl' ],
                [ 'default as dithering_fragment', 'from', './ShaderChunk/dithering_fragment.glsl' ],
                [ 'default as dithering_pars_fragment', 'from', './ShaderChunk/dithering_pars_fragment.glsl' ],
                [ 'default as roughnessmap_fragment', 'from', './ShaderChunk/roughnessmap_fragment.glsl' ],
                [ 'default as roughnessmap_pars_fragment', 'from', './ShaderChunk/roughnessmap_pars_fragment.glsl' ],
                [ 'default as shadowmap_pars_fragment', 'from', './ShaderChunk/shadowmap_pars_fragment.glsl' ],
                [ 'default as shadowmap_pars_vertex', 'from', './ShaderChunk/shadowmap_pars_vertex.glsl' ],
                [ 'default as shadowmap_vertex', 'from', './ShaderChunk/shadowmap_vertex.glsl' ],
                [ 'default as shadowmask_pars_fragment', 'from', './ShaderChunk/shadowmask_pars_fragment.glsl' ],
                [ 'default as skinbase_vertex', 'from', './ShaderChunk/skinbase_vertex.glsl' ],
                [ 'default as skinning_pars_vertex', 'from', './ShaderChunk/skinning_pars_vertex.glsl' ],
                [ 'default as skinning_vertex', 'from', './ShaderChunk/skinning_vertex.glsl' ],
                [ 'default as skinnormal_vertex', 'from', './ShaderChunk/skinnormal_vertex.glsl' ],
                [ 'default as specularmap_fragment', 'from', './ShaderChunk/specularmap_fragment.glsl' ],
                [ 'default as specularmap_pars_fragment', 'from', './ShaderChunk/specularmap_pars_fragment.glsl' ],
                [ 'default as tonemapping_fragment', 'from', './ShaderChunk/tonemapping_fragment.glsl' ],
                [ 'default as tonemapping_pars_fragment', 'from', './ShaderChunk/tonemapping_pars_fragment.glsl' ],
                [ 'default as uv_pars_fragment', 'from', './ShaderChunk/uv_pars_fragment.glsl' ],
                [ 'default as uv_pars_vertex', 'from', './ShaderChunk/uv_pars_vertex.glsl' ],
                [ 'default as uv_vertex', 'from', './ShaderChunk/uv_vertex.glsl' ],
                [ 'default as uv2_pars_fragment', 'from', './ShaderChunk/uv2_pars_fragment.glsl' ],
                [ 'default as uv2_pars_vertex', 'from', './ShaderChunk/uv2_pars_vertex.glsl' ],
                [ 'default as uv2_vertex', 'from', './ShaderChunk/uv2_vertex.glsl' ],
                [ 'default as worldpos_vertex', 'from', './ShaderChunk/worldpos_vertex.glsl' ],

                [ 'default as cube_frag', 'from', './ShaderLib/cube_frag.glsl' ],
                [ 'default as cube_vert', 'from', './ShaderLib/cube_vert.glsl' ],
                [ 'default as depth_frag', 'from', './ShaderLib/depth_frag.glsl' ],
                [ 'default as depth_vert', 'from', './ShaderLib/depth_vert.glsl' ],
                [ 'default as distanceRGBA_frag', 'from', './ShaderLib/distanceRGBA_frag.glsl' ],
                [ 'default as distanceRGBA_vert', 'from', './ShaderLib/distanceRGBA_vert.glsl' ],
                [ 'default as equirect_frag', 'from', './ShaderLib/equirect_frag.glsl' ],
                [ 'default as equirect_vert', 'from', './ShaderLib/equirect_vert.glsl' ],
                [ 'default as linedashed_frag', 'from', './ShaderLib/linedashed_frag.glsl' ],
                [ 'default as linedashed_vert', 'from', './ShaderLib/linedashed_vert.glsl' ],
                [ 'default as meshbasic_frag', 'from', './ShaderLib/meshbasic_frag.glsl' ],
                [ 'default as meshbasic_vert', 'from', './ShaderLib/meshbasic_vert.glsl' ],
                [ 'default as meshlambert_frag', 'from', './ShaderLib/meshlambert_frag.glsl' ],
                [ 'default as meshlambert_vert', 'from', './ShaderLib/meshlambert_vert.glsl' ],
                [ 'default as meshphong_frag', 'from', './ShaderLib/meshphong_frag.glsl' ],
                [ 'default as meshphong_vert', 'from', './ShaderLib/meshphong_vert.glsl' ],
                [ 'default as meshphysical_frag', 'from', './ShaderLib/meshphysical_frag.glsl' ],
                [ 'default as meshphysical_vert', 'from', './ShaderLib/meshphysical_vert.glsl' ],
                [ 'default as normal_frag', 'from', './ShaderLib/normal_frag.glsl' ],
                [ 'default as normal_vert', 'from', './ShaderLib/normal_vert.glsl' ],
                [ 'default as points_frag', 'from', './ShaderLib/points_frag.glsl' ],
                [ 'default as points_vert', 'from', './ShaderLib/points_vert.glsl' ],
                [ 'default as shadow_frag', 'from', './ShaderLib/shadow_frag.glsl' ],
                [ 'default as shadow_vert', 'from', './ShaderLib/shadow_vert.glsl' ],
                [ 'default as sprite_frag', 'from', './ShaderLib/sprite_frag.glsl' ],
                [ 'default as sprite_vert', 'from', './ShaderLib/sprite_vert.glsl' ]
            ],
            exportsOverride: [ 'ShaderChunk' ],
            outputOverride:  'shaders/ShaderChunk.js'
        },
        ShaderGodRays:     {
            outputOverride: 'shaders/ShaderGodRays.js'
        },
        ShaderSkin: {
//            imports:        [
//                'UniformsLib',
//                'ShaderChunk'
//            ],
            outputOverride: 'shaders/ShaderSkin.js'
        },
        ShaderTerrain: {
//            imports:        [
//                'UniformsLib',
//                'ShaderChunk'
//            ],
            outputOverride: 'shaders/ShaderTerrain.js'
        },
        ShaderToon:        {
            outputOverride: 'shaders/ShaderToon.js'
        },
        ShaderTranslucent: {
//            imports:        [
//                'UniformsLib',
//                'ShaderChunk'
//            ],
            outputOverride: 'shaders/ShaderTranslucent.js'
        },
        ShaderLib:         {
            outputOverride: 'shaders/ShaderLib.js'
        },
        UniformsLib:       {
            outputOverride: 'shaders/UniformsLib.js'
        },
        UniformsUtils:     {
            outputOverride: 'shaders/UniformsUtils.js'
        },

        // ShaderChunk
        alphamap_fragment:             { outputOverride: 'shaders/ShaderChunk/alphamap_fragment.glsl' },
        alphamap_pars_fragment:        { outputOverride: 'shaders/ShaderChunk/alphamap_pars_fragment.glsl' },
        alphatest_fragment:            { outputOverride: 'shaders/ShaderChunk/alphatest_fragment.glsl' },
        aomap_fragment:                { outputOverride: 'shaders/ShaderChunk/aomap_fragment.glsl' },
        aomap_pars_fragment:           { outputOverride: 'shaders/ShaderChunk/aomap_pars_fragment.glsl' },
        begin_vertex:                  { outputOverride: 'shaders/ShaderChunk/begin_vertex.glsl' },
        beginnormal_vertex:            { outputOverride: 'shaders/ShaderChunk/beginnormal_vertex.glsl' },
        bsdfs:                         { outputOverride: 'shaders/ShaderChunk/bsdfs.glsl' },
        bumpmap_pars_fragment:         { outputOverride: 'shaders/ShaderChunk/bumpmap_pars_fragment.glsl' },
        clipping_planes_fragment:      { outputOverride: 'shaders/ShaderChunk/clipping_planes_fragment.glsl' },
        clipping_planes_pars_fragment: { outputOverride: 'shaders/ShaderChunk/clipping_planes_pars_fragment.glsl' },
        clipping_planes_pars_vertex:   { outputOverride: 'shaders/ShaderChunk/clipping_planes_pars_vertex.glsl' },
        clipping_planes_vertex:        { outputOverride: 'shaders/ShaderChunk/clipping_planes_vertex.glsl' },
        color_fragment:                { outputOverride: 'shaders/ShaderChunk/color_fragment.glsl' },
        color_pars_fragment:           { outputOverride: 'shaders/ShaderChunk/color_pars_fragment.glsl' },
        color_pars_vertex:             { outputOverride: 'shaders/ShaderChunk/color_pars_vertex.glsl' },
        color_vertex:                  { outputOverride: 'shaders/ShaderChunk/color_vertex.glsl' },
        common:                        { outputOverride: 'shaders/ShaderChunk/common.glsl' },
        cube_uv_reflection_fragment:   { outputOverride: 'shaders/ShaderChunk/cube_uv_reflection_fragment.glsl' },
        defaultnormal_vertex:          { outputOverride: 'shaders/ShaderChunk/defaultnormal_vertex.glsl' },
        displacementmap_pars_vertex:   { outputOverride: 'shaders/ShaderChunk/displacementmap_pars_vertex.glsl' },
        displacementmap_vertex:        { outputOverride: 'shaders/ShaderChunk/displacementmap_vertex.glsl' },
        dithering_fragment:            { outputOverride: 'shaders/ShaderChunk/dithering_fragment.glsl' },
        dithering_pars_fragment:       { outputOverride: 'shaders/ShaderChunk/dithering_pars_fragment.glsl' },
        emissivemap_fragment:          { outputOverride: 'shaders/ShaderChunk/emissivemap_fragment.glsl' },
        emissivemap_pars_fragment:     { outputOverride: 'shaders/ShaderChunk/emissivemap_pars_fragment.glsl' },
        encodings_fragment:            { outputOverride: 'shaders/ShaderChunk/encodings_fragment.glsl' },
        encodings_pars_fragment:       { outputOverride: 'shaders/ShaderChunk/encodings_pars_fragment.glsl' },
        envmap_fragment:               { outputOverride: 'shaders/ShaderChunk/envmap_fragment.glsl' },
        envmap_pars_fragment:          { outputOverride: 'shaders/ShaderChunk/envmap_pars_fragment.glsl' },
        envmap_pars_vertex:            { outputOverride: 'shaders/ShaderChunk/envmap_pars_vertex.glsl' },
        envmap_physical_pars_fragment: { outputOverride: 'shaders/ShaderChunk/envmap_physical_pars_fragment.glsl' },
        envmap_vertex:                 { outputOverride: 'shaders/ShaderChunk/envmap_vertex.glsl' },
        fog_fragment:                  { outputOverride: 'shaders/ShaderChunk/fog_fragment.glsl' },
        fog_pars_fragment:             { outputOverride: 'shaders/ShaderChunk/fog_pars_fragment.glsl' },
        fog_pars_vertex:               { outputOverride: 'shaders/ShaderChunk/fog_pars_vertex.glsl' },
        fog_vertex:                    { outputOverride: 'shaders/ShaderChunk/fog_vertex.glsl' },
        gradientmap_pars_fragment:     { outputOverride: 'shaders/ShaderChunk/gradientmap_pars_fragment.glsl' },
        lightmap_fragment:             { outputOverride: 'shaders/ShaderChunk/lightmap_fragment.glsl' },
        lightmap_pars_fragment:        { outputOverride: 'shaders/ShaderChunk/lightmap_pars_fragment.glsl' },
        lights_fragment_begin:         { outputOverride: 'shaders/ShaderChunk/lights_fragment_begin.glsl' },
        lights_fragment_end:           { outputOverride: 'shaders/ShaderChunk/lights_fragment_end.glsl' },
        lights_fragment_maps:          { outputOverride: 'shaders/ShaderChunk/lights_fragment_maps.glsl' },
        lights_lambert_vertex:         { outputOverride: 'shaders/ShaderChunk/lights_lambert_vertex.glsl' },
        lights_pars_begin:             { outputOverride: 'shaders/ShaderChunk/lights_pars_begin.glsl' },
        lights_phong_fragment:         { outputOverride: 'shaders/ShaderChunk/lights_phong_fragment.glsl' },
        lights_phong_pars_fragment:    { outputOverride: 'shaders/ShaderChunk/lights_phong_pars_fragment.glsl' },
        lights_physical_fragment:      { outputOverride: 'shaders/ShaderChunk/lights_physical_fragment.glsl' },
        lights_physical_pars_fragment: { outputOverride: 'shaders/ShaderChunk/lights_physical_pars_fragment.glsl' },
        logdepthbuf_fragment:          { outputOverride: 'shaders/ShaderChunk/logdepthbuf_fragment.glsl' },
        logdepthbuf_pars_fragment:     { outputOverride: 'shaders/ShaderChunk/logdepthbuf_pars_fragment.glsl' },
        logdepthbuf_pars_vertex:       { outputOverride: 'shaders/ShaderChunk/logdepthbuf_pars_vertex.glsl' },
        logdepthbuf_vertex:            { outputOverride: 'shaders/ShaderChunk/logdepthbuf_vertex.glsl' },
        map_fragment:                  { outputOverride: 'shaders/ShaderChunk/map_fragment.glsl' },
        map_pars_fragment:             { outputOverride: 'shaders/ShaderChunk/map_pars_fragment.glsl' },
        map_particle_fragment:         { outputOverride: 'shaders/ShaderChunk/map_particle_fragment.glsl' },
        map_particle_pars_fragment:    { outputOverride: 'shaders/ShaderChunk/map_particle_pars_fragment.glsl' },
        metalnessmap_fragment:         { outputOverride: 'shaders/ShaderChunk/metalnessmap_fragment.glsl' },
        metalnessmap_pars_fragment:    { outputOverride: 'shaders/ShaderChunk/metalnessmap_pars_fragment.glsl' },
        morphnormal_vertex:            { outputOverride: 'shaders/ShaderChunk/morphnormal_vertex.glsl' },
        morphtarget_pars_vertex:       { outputOverride: 'shaders/ShaderChunk/morphtarget_pars_vertex.glsl' },
        morphtarget_vertex:            { outputOverride: 'shaders/ShaderChunk/morphtarget_vertex.glsl' },
        normal_fragment_begin:         { outputOverride: 'shaders/ShaderChunk/normal_fragment_begin.glsl' },
        normal_fragment_maps:          { outputOverride: 'shaders/ShaderChunk/normal_fragment_maps.glsl' },
        normalmap_pars_fragment:       { outputOverride: 'shaders/ShaderChunk/normalmap_pars_fragment.glsl' },
        packing:                       { outputOverride: 'shaders/ShaderChunk/packing.glsl' },
        premultiplied_alpha_fragment:  { outputOverride: 'shaders/ShaderChunk/premultiplied_alpha_fragment.glsl' },
        project_vertex:                { outputOverride: 'shaders/ShaderChunk/project_vertex.glsl' },
        roughnessmap_fragment:         { outputOverride: 'shaders/ShaderChunk/roughnessmap_fragment.glsl' },
        roughnessmap_pars_fragment:    { outputOverride: 'shaders/ShaderChunk/roughnessmap_pars_fragment.glsl' },
        shadowmap_pars_fragment:       { outputOverride: 'shaders/ShaderChunk/shadowmap_pars_fragment.glsl' },
        shadowmap_pars_vertex:         { outputOverride: 'shaders/ShaderChunk/shadowmap_pars_vertex.glsl' },
        shadowmap_vertex:              { outputOverride: 'shaders/ShaderChunk/shadowmap_vertex.glsl' },
        shadowmask_pars_fragment:      { outputOverride: 'shaders/ShaderChunk/shadowmask_pars_fragment.glsl' },
        skinbase_vertex:               { outputOverride: 'shaders/ShaderChunk/skinbase_vertex.glsl' },
        skinning_pars_vertex:          { outputOverride: 'shaders/ShaderChunk/skinning_pars_vertex.glsl' },
        skinning_vertex:               { outputOverride: 'shaders/ShaderChunk/skinning_vertex.glsl' },
        skinnormal_vertex:             { outputOverride: 'shaders/ShaderChunk/skinnormal_vertex.glsl' },
        specularmap_fragment:          { outputOverride: 'shaders/ShaderChunk/specularmap_fragment.glsl' },
        specularmap_pars_fragment:     { outputOverride: 'shaders/ShaderChunk/specularmap_pars_fragment.glsl' },
        tonemapping_fragment:          { outputOverride: 'shaders/ShaderChunk/tonemapping_fragment.glsl' },
        tonemapping_pars_fragment:     { outputOverride: 'shaders/ShaderChunk/tonemapping_pars_fragment.glsl' },
        uv2_pars_fragment:             { outputOverride: 'shaders/ShaderChunk/uv2_pars_fragment.glsl' },
        uv2_pars_vertex:               { outputOverride: 'shaders/ShaderChunk/uv2_pars_vertex.glsl' },
        uv2_vertex:                    { outputOverride: 'shaders/ShaderChunk/uv2_vertex.glsl' },
        uv_pars_fragment:              { outputOverride: 'shaders/ShaderChunk/uv_pars_fragment.glsl' },
        uv_pars_vertex:                { outputOverride: 'shaders/ShaderChunk/uv_pars_vertex.glsl' },
        uv_vertex:                     { outputOverride: 'shaders/ShaderChunk/uv_vertex.glsl' },
        worldpos_vertex:               { outputOverride: 'shaders/ShaderChunk/worldpos_vertex.glsl' },

        // ShaderLib
        cube_frag:         { outputOverride: 'shaders/ShaderLib/cube_frag.glsl' },
        cube_vert:         { outputOverride: 'shaders/ShaderLib/cube_vert.glsl' },
        depth_frag:        { outputOverride: 'shaders/ShaderLib/depth_frag.glsl' },
        depth_vert:        { outputOverride: 'shaders/ShaderLib/depth_vert.glsl' },
        distanceRGBA_frag: { outputOverride: 'shaders/ShaderLib/distanceRGBA_frag.glsl' },
        distanceRGBA_vert: { outputOverride: 'shaders/ShaderLib/distanceRGBA_vert.glsl' },
        equirect_frag:     { outputOverride: 'shaders/ShaderLib/equirect_frag.glsl' },
        equirect_vert:     { outputOverride: 'shaders/ShaderLib/equirect_vert.glsl' },
        linedashed_frag:   { outputOverride: 'shaders/ShaderLib/linedashed_frag.glsl' },
        linedashed_vert:   { outputOverride: 'shaders/ShaderLib/linedashed_vert.glsl' },
        meshbasic_frag:    { outputOverride: 'shaders/ShaderLib/meshbasic_frag.glsl' },
        meshbasic_vert:    { outputOverride: 'shaders/ShaderLib/meshbasic_vert.glsl' },
        meshlambert_frag:  { outputOverride: 'shaders/ShaderLib/meshlambert_frag.glsl' },
        meshlambert_vert:  { outputOverride: 'shaders/ShaderLib/meshlambert_vert.glsl' },
        meshphong_frag:    { outputOverride: 'shaders/ShaderLib/meshphong_frag.glsl' },
        meshphong_vert:    { outputOverride: 'shaders/ShaderLib/meshphong_vert.glsl' },
        meshphysical_frag: { outputOverride: 'shaders/ShaderLib/meshphysical_frag.glsl' },
        meshphysical_vert: { outputOverride: 'shaders/ShaderLib/meshphysical_vert.glsl' },
        normal_frag:       { outputOverride: 'shaders/ShaderLib/normal_frag.glsl' },
        normal_vert:       { outputOverride: 'shaders/ShaderLib/normal_vert.glsl' },
        points_frag:       { outputOverride: 'shaders/ShaderLib/points_frag.glsl' },
        points_vert:       { outputOverride: 'shaders/ShaderLib/points_vert.glsl' },
        shadow_frag:       { outputOverride: 'shaders/ShaderLib/shadow_frag.glsl' },
        shadow_vert:       { outputOverride: 'shaders/ShaderLib/shadow_vert.glsl' },
        sprite_frag:       { outputOverride: 'shaders/ShaderLib/sprite_frag.glsl' },
        sprite_vert:       { outputOverride: 'shaders/ShaderLib/sprite_vert.glsl' },

        ShadowMapViewer:       {
//            imports: [ 'UnpackDepthRGBAShader' ]
        },
        Shape:                 {
            outputOverride: 'core/Shape.js'
        },
        ShapePath:             {
            outputOverride: 'core/ShapePath.js'
        },
        ShapeUtils:            {
            outputOverride: 'utils/ShapeUtils.js'
        },
        SimplexNoise:          {
            outputOverride:  'misc/SimplexNoise.js',
            exportsOverride: [ 'SimplexNoise' ]
        },
        SkeletonUtils:         {
            replacements: [
                [ 'new Vector2( targetParentPos.x, targetParentPos.y ),', 'new Vector2( targetParentPos.x, targetParentPos.y )' ],
                [ 'new Vector2( sourceParentPos.x, sourceParentPos.y ),', 'new Vector2( sourceParentPos.x, sourceParentPos.y )' ]
            ]
        },
        Sky:                   {
//            imports: [ 'UniformsUtils' ]
        },
        SMAAPass:              {
//            imports:         [
//                'SMAAShader',
//                'UniformsUtils'
//            ],
            exportsOverride: [ 'SMAAPass' ]
        },
        SMAAShader:            {
            exportsOverride: [ 'SMAAShader' ]
        },
        SoftwareRenderer:      {
//            imports: [ '_Math' ]
        },
        SplineCurve:           {
            outputOverride: 'curves/SplineCurve.js'
        },
        SpriteNode:            {
//            imports: [
//                'UniformsUtils',
//                'UniformsLib'
//            ]
        },
        SSAARenderPass:        {
//            imports: [
//                'CopyShader',
//                'UniformsUtils'
//            ]
        },
        StandardNode:          {
//            imports: [
//                'UniformsUtils',
//                'UniformsLib'
//            ]
        },
        STLLoader:             {
//            imports: [
//                'DefaultLoadingManager',
//                'LoaderUtils'
//            ]
        },
        SVGLoader:             {
//            imports: [ 'DefaultLoadingManager' ]
        },
        TDSLoader:             {
//            imports: [
//                'DefaultLoadingManager',
//                'LoaderUtils'
//            ]
        },
        TexturePass:           {
//            imports: [
//                'CopyShader',
//                'UniformsUtils'
//            ]
        },
        TGALoader:             {
//            imports: [ 'DefaultLoadingManager' ]
        },
        TimelinerController:   {
//            imports:        [
//                'AnimationUtils'
//            ],
            outputOverride: 'animation/TimelinerController.js'
        },
        TempNode:              {
//            imports: [ '_Math' ]
        },
        TTFLoader:             {
//            imports: [
//                'DefaultLoadingManager'
//            ]
        },
        TypedArrayUtils:       {
//            imports:        [
//                'AnimationUtils',
//                'Timeliner'
//            ],
            outputOverride: 'utils/TypedArrayUtils.js'
        },
        UCSCharacter:          {
            outputOverride: 'objects/UCSCharacter.js'
        },
        UnrealBloomPass:       {
//            imports: [
//                'LuminosityHighPassShader',
//                'UniformsUtils',
//                'CopyShader'
//            ]
        },
        Vector2Node:           {
//            imports: [ 'NodeMaterial' ]
        },
        Vector3Node:           {
//            imports: [ 'NodeMaterial' ]
        },
        Vector4Node:           {
//            imports: [ 'NodeMaterial' ]
        },
        VolumeSlice:           {
            outputOverride: 'audio/VolumeSlice.js'
        },
        VRMLLoader:            {
//            imports: [ 'DefaultLoadingManager' ]
        },
        VRMLoader:             {
//            imports:         [
//                'DefaultLoadingManager'
//            ],
            exportsOverride: [ 'VRMLoader' ]
        },
        VTKLoader:             {
//            imports: [
//                'DefaultLoadingManager',
//                'LoaderUtils'
//            ]
        },
        Water:                 {
//            imports: [
//                'UniformsUtils',
//                'UniformsLib',
//                'ShaderChunk',
//                '_Math'
//            ]
        },
        Water2:                {
//            imports:         [
//                'UniformsUtils',
//                'UniformsLib'
//            ],
            replacements:    [
                [ /Water/g, 'Water2' ],
                [ 'Water2 = function (', 'function Water2(' ],
            ],
            exportsOverride: [ 'Water2' ]
        },
        WebGLDeferredRenderer: {
//            imports:      [
//                'CopyShader',
//                'FXAAShader'
//            ],
            replacements: [
                [ 'DeferredShaderChunk = ', 'var DeferredShaderChunk = ' ],
                [ 'ShaderDeferredCommon = ', 'var ShaderDeferredCommon = ' ],
                [ 'ShaderDeferred = ', 'var ShaderDeferred = ' ],
            ]
        },
        WebVR:                 {
            replacements:    [
                [ 'var WEBVR', 'var WebVR' ]
            ],
            exportsOverride: [ 'WebVR' ]
        }
    }
}
